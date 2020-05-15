import validate from "validate.js";
import { authenticatedAction } from "../../utils/api";
import { initDatabase } from "../../utils/mongodb";

export async function getRecipe(username) {
  const client = await initDatabase();
  const recipes = client.collection("recipes");

  let query = recipes.find({ username: { $eq: username } });
  const recipeArray = await query.toArray();

  return recipeArray;
}

export async function removeRecipe(username, day, type) {
  const client = await initDatabase();
  const recipes = client.collection("recipes");
  // Check for clear all
  if (day == "cle" && type == "arall") {
    recipes.remove({
      username: { $eq: username },
    });
    console.log("Ran removeAllRecipes");
  } else {
    recipes.remove({
      username: { $eq: username },
      day: { $eq: day },
      type: { $eq: type },
    });
    console.log("Ran removeSingleRecipe");
  }
}

const recipeConstraints = {
  username: {
    presence: true,
  },
  day: {
    presence: true,
  },
  type: {
    presence: true,
  },
  mealname: {
    presence: true,
  },
  ingredients: {
    presence: true,
  },
};

async function createRecipe(req, user) {
  let newRecipe;

  try {
    newRecipe = await validate.async(req.body, recipeConstraints, {
      cleanAttributes: true,
      format: "flat",
    });
  } catch (err) {
    console.log("err = " + err);
    throw {
      status: 400,
      message: err.join(", "),
    };
  }

  const client = await initDatabase();
  const recipes = client.collection("recipes");

  await recipes.insertOne(newRecipe);

  console.log("newRecipe: " + JSON.stringify(newRecipe));

  return newRecipe;
}

async function performAction(req, user) {
  switch (req.method) {
    case "GET":
      return getRecipe(user.nickname);
    case "POST":
      return createRecipe(req, user);
    case "DELETE":
      return removeRecipe(user.nickname, req.body.day, req.body.type);
  }

  throw { status: 405 };
}

export default authenticatedAction(performAction);
