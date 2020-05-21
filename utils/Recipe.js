import React from "react";
import style from "../utils/recipe.module.css";

function Recipe(props) {
  return (
    <div className={style.recipe}>
      <img src={props.image} className={style.image} alt={props.label}></img>
      <br></br>
      <div>
        <h2>{props.title}</h2>
        <ul>
          {props.ingredients.map((i) => (
            <li>{i.text}</li>
          ))}
        </ul>
        <p> Calories: {Math.round(props.calory)}</p>
      </div>
      <a href={props.url} role="button">
        View Recipe
      </a>
    </div>
  );
}
export default Recipe;
