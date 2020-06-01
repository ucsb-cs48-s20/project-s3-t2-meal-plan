import style from "../utils/recipe.module.css";
import { requiredAuth } from "../utils/ssr";
import React, { useState } from "react";
import fetch from "isomorphic-unfetch";

export const getServerSideProps = requiredAuth;

async function addButton(label, ingreds, dayy, typee, username) {
  await fetch("/api/meal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      mealname: label,
      day: dayy,
      type: typee,
      ingredients: ingreds.toString().split(/[,]/),
    }),
  });
  location.reload();
  alert("Added Meal");
}

function Recipe(props) {
  const [dayy, setDay] = useState("");
  const [typee, setType] = useState("");
  return (
    <div className={style.recipe}>
      <img src={props.image} className={style.image} alt={props.label}></img>
      <br></br>
      <div>
        <h2>{props.title}</h2>
        <form>
          <div className="formmm">
            <label htmlFor="day">
              <b>Day of the Week : </b>
            </label>
            <select onChange={(event) => setDay(event.target.value)}>
              <option>Select Day</option>
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thu">Thursday</option>
              <option value="fri">Friday</option>
              <option value="sat">Saturday</option>
              <option value="sun">Sunday</option>
            </select>
            <br></br>
          </div>

          <div className="formmm">
            <label htmlFor="meal">
              <b>Meal of the Day : </b>
            </label>
            <select onChange={(event) => setType(event.target.value)}>
              <option>Select Meal</option>
              <option value="break">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinnr">Dinner</option>
            </select>
            <br></br>
          </div>
        </form>
        <button
          type="submit"
          onClick={() =>
            addButton(
              props.label,
              props.ingredients.map((i) => i.text),
              dayy,
              typee,
              props.user
            )
          }
        >
          {" "}
          Add to planner{" "}
        </button>
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
