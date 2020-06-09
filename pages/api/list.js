import validate from "validate.js";
import { authenticatedAction } from "../../utils/api";
import { initDatabase } from "../../utils/mongodb";

export async function getIngredient(username) {
  const client = await initDatabase();
  const ingredients = client.collection("shoppinglists");

  let query = ingredients.find({ username: { $eq: username } });
  const ingredientArray = await query.toArray();

  return ingredientArray;
}

export async function updateIngredient(name, item, status) {
  const client = await initDatabase();
  const ingredients = client.collection("shoppinglists");
  const result = ingredients.updateOne(
    { username: name, ingredient: item },
    { $set: { deleteStatus: status } }
  );
  return result;
}

export async function removeIngredient(username, amount) {
  const client = await initDatabase();
  const ingredients = client.collection("shoppinglists");
  if (amount == "some") {
    const answer = ingredients.removeMany({
      username: { $eq: username },
      deleteStatus: { $eq: true },
    });
    return answer;
  } else {
    const answer2 = ingredients.removeMany({
      username: { $eq: username },
    });
    return answer2;
  }
}

const ingredientConstraints = {
  username: {
    presence: true,
  },
  ingredient: {
    presence: true,
  },
  deleteStatus: {
    presence: true,
  },
};

async function createIngredient(req, user) {
  const client = await initDatabase();
  const ingredients = client.collection("shoppinglists");

  let newIngredient;

  try {
    newIngredient = await validate.async(req.body, ingredientConstraints, {
      cleanAttributes: true,
      format: "flat",
    });
  } catch (err) {
    console.log("Error = " + err);
    throw {
      status: 400,
    };
  }
  await ingredients.insertOne(newIngredient);
  return newIngredient;
}

async function performAction(req, user) {
  switch (req.method) {
    case "PUT":
      return updateIngredient(
        req.body.username,
        req.body.ingredient,
        req.body.deleteStatus
      );
    case "GET":
      return getIngredient(user.nickname);
    case "POST":
      return createIngredient(req, user);
    case "DELETE":
      return removeIngredient(user.nickname, req.body.amount);
  }

  throw { status: 405 };
}

export default authenticatedAction(performAction);
