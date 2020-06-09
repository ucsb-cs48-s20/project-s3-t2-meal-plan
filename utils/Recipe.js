import style from "../utils/recipe.module.css";
import { requiredAuth } from "../utils/ssr";
import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import calculateCalories from "../utils/calculation";

export const getServerSideProps = requiredAuth;

async function addButton(label, ingreds, dayy, typee, username, link) {
  if (dayy == "" || typee == "") {
    alert("Please specify where to add this meal to!");
    return;
  }
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
      ingredients: ingreds,
      link,
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
      <style jsx>
        {`
          label {
            padding-right: 10px;
            font-size: 16px;
          }
          select {
            font-size: 16px;
          }
          ul {
            margin-top: 5px;
            font-size: 14px;
          }
          button {
            background-color: white;
            border-radius: 4px;
            border: 2px solid #699ee7;
            color: #699ee7;
            padding: 5px;
            font-weight: 500;
            font-size: 14px;
            margin-top: 5px;
            margin-bottom: 5px;
          }
          button:hover {
            background-color: #699ee7;
            color: white;
          }
        `}
      </style>
      <img src={props.image} className={style.image} alt={props.label}></img>
      <br></br>
      <div>
        <h3>{props.title}</h3>
        <form className="formmm">
          <label htmlFor="day">Day of the Week: </label>
          <select onChange={(event) => setDay(event.target.value)}>
            <option value="">Select Day</option>
            <option value="mon">Monday</option>
            <option value="tue">Tuesday</option>
            <option value="wed">Wednesday</option>
            <option value="thu">Thursday</option>
            <option value="fri">Friday</option>
            <option value="sat">Saturday</option>
            <option value="sun">Sunday</option>
          </select>
          <br></br>
          <label htmlFor="meal">Meal of the Week:</label>
          <select onChange={(event) => setType(event.target.value)}>
            <option value="">Select Meal</option>
            <option value="break">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinnr">Dinner</option>
          </select>
        </form>
        <button
          type="submit"
          onClick={() =>
            addButton(
              props.label,
              props.ingredients.map((i) => i.text),
              dayy,
              typee,
              props.user,
              props.url
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
        <p> Calories: {calculateCalories(props.calory)}</p>
      </div>
      <a href={props.url} role="button" target="_blank">
        View Recipe
      </a>
    </div>
  );
}
export default Recipe;
