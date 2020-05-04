import validate from "validate.js";
import { authenticatedAction } from "../../utils/api";
import { initDatabase } from "../../utils/mongodb";

export async function getRecipe(user) {
  const client = await initDatabase();
  const users = client.collection("recipes");

  const query = {};

  if (user) {
    query.user = user;
  }

  return user.find(query).toArray();
}

const recipeConstraints = {
  day: {
    presence: true,
  },
  type: {
    presence: true,
  },
  mealname: {
    presence: true,
    length: {
      minimum: 4,
    },
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
  //console.log("client: "+JSON.stringify(client));
  //console.log("recipes: "+JSON.stringify(recipes));
  console.log("newRecipe: " + JSON.stringify(newRecipe));

  return newRecipe;
}

async function performAction(req, res) {
  const { user } = req.query;

  switch (req.method) {
    case "GET":
      return getRecipe(user);
    case "POST":
      return createRecipe(req, user);
  }

  throw { status: 405 };
}

export default authenticatedAction(performAction);
