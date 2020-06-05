import validate from "validate.js";
import { authenticatedAction } from "../../utils/api";
import { initDatabase } from "../../utils/mongodb";
import config from "../../utils/config.js";

export async function getIngredient(username) {
  const client = await initDatabase();
  const ingredients = client.collection("shoppinglists");

  let query = ingredients.find({ username: { $eq: username } });
  const ingredientArray = await query.toArray();

  return ingredientArray;
}

export async function updateIngredient(name, item, status) {
  console.log("made it to update ingredient");
  const client = await initDatabase();
  const ingredients = client.collection("shoppinglists");
  const result = ingredients.updateOne(
    { username: name, ingredient: item },
    { $set: { "deleteStatus.$": status } }
  );
  console.log("Updated status");
  console.log("result=" + JSON.stringify(result));
  return result;
}

export async function removeIngredient(username, amount) {
  const client = await initDatabase();
  const ingredients = client.collection("shoppinglists");
  if (err) {
    console.log("theres an issue");
  } else {
    if (amount == "some") {
      ingredients.remove({
        username: { $eq: username },
        deleteStatus: { $eq: true },
      });
      console.log("Ran removeSomeIngredients");
    } else {
      ingredients.remove({
        username: { $eq: username },
      });
      console.log("Ran removeAllIngredients");
    }
    answer = {};
  }
  return answer;
}

const ingredientConstraints = {
  username: {
    presence: true,
  },
  ingredient: {
    presence: true,
  },
  delete: {
    presence: true,
  },
};

async function createIngredient(req, user) {
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

  const client = await initDatabase();
  const ingredients = client.collection("shoppinglists");

  await ingredients.insertOne(newIngredient);

  console.log("newIngredient: " + JSON.stringify(newIngredient));

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
