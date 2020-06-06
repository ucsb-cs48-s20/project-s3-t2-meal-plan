import mealMatrix from "../components/Table";

export const showIngred = (e) => {
  e.preventDefault;
  for (
    var i = 0;
    i <
    mealMatrix[e.target.id.slice(0, 1)][e.target.id.slice(1, 2)].ingredients
      .length;
    i++
  ) {
    console.log(mealMatrix[e.target.day][e.target.type].ingredients[i]);
  }
};

export default showIngred;
