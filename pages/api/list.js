import validate from "validate.js";
import { authenticatedAction } from "../../utils/api";
import { initDatabase } from "../../utils/mongodb";
import config from "../../utils/config.js";

export async function getIngredient(username) {
  const client = await initDatabase();
  const ingredients = client.collection(config.shoppinglists);

  let query = ingredients.find({ username: { $eq: username } });
  const ingredientArray = await query.toArray();

  return ingredientArray;
}

export async function removeIngredient(username, ingredient) {
  const client = await initDatabase();
  const ingredients = client.collection(config.shoppinglists);
  // Check for clear all
  if (ingredient == "all") {
    ingredients.remove({
      username: { $eq: username },
    });
    console.log("Ran removeAllIngredients");
  } else {
    recipes.remove({
      username: { $eq: username },
      ingredient: { $eq: ingredient },
    });
    console.log("Ran removeSingleIngredient");
  }
}

const ingredientConstraints = {
  username: {
    presence: true,
  },
  ingredient: {
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
    console.log("err = " + err);
    throw {
      status: 400,
    };
  }

  const client = await initDatabase();
  const ingredients = client.collection(config.shoppinglist);

  await ingredients.insertOne(newIngredient);

  console.log("newIngredient: " + JSON.stringify(newIngredient));

  return newIngredient;
}

async function performAction(req, user) {
  switch (req.method) {
    case "GET":
      return getIngredient(user.nickname);
    case "POST":
      return createIngredient(req, user);
    case "DELETE":
      return removeIngredient(user.nickname, req.body.ingredient);
  }

  throw { status: 405 };
}

export default authenticatedAction(performAction);
