import { requiredAuth } from "../utils/ssr";
import Container from "react-bootstrap/Container";
import Head from "next/head";

import React, { useState } from "react";
import fetch from "isomorphic-unfetch";

export const getServerSideProps = requiredAuth;

function EnterMeal(props) {
  const user = props.user;
  const [username, setUsername] = useState(props.user.nickname);
  const [mealname, setMealname] = useState("");
  const [day, setDay] = useState("");
  const [type, setType] = useState("");
  const [ingredients, setIngredients] = useState("");

  const saveRecipe = async (e) => {
    e.preventDefault();
    if (mealname == "" || day == "" || type == "" || ingredients == "") {
      alert("Please fill out all fields");
      return;
    }
    await fetch("/api/meal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        mealname: mealname,
        day: day,
        type: type,
        ingredients: ingredients.split(/[ ,]+/),
      }),
    });
    location.reload();
    alert("Added Meal");
    window.location.href = "/";
  };

  return (
    <Container user={user}>
      {user ? (
        <div>
          <Head>
            <title>Enter Meal</title>
          </Head>
          <div>
            <style jsx>
              {`
                form {
                  padding-top: 10px;
                }
                label {
                  padding-top: 10px;
                  font-weight: 500;
                }
                input,
                textarea {
                  padding: 5px;
                  margin-left: 5px;
                  width: 500px;
                  margin-bottom: 10px;
                }
                select {
                  padding: 5px;
                  margin-left: 5px;
                  margin-bottom: 10px;
                }
                button {
                  background-color: white;
                  border-radius: 4px;
                  border: 2px solid #699ee7;
                  color: #699ee7;
                  padding: 7px;
                  font-weight: 500;
                }
                button:hover {
                  background-color: #699ee7;
                  color: white;
                }
                .changeType {
                  width: 12px;
                }
                label {
                  padding: 3px;
                }
                .segmented-control {
                  display: inline;
                }
              `}
            </style>
            <form onSubmit={saveRecipe}>
              <h1>Enter a Meal</h1>
              <label htmlFor="day">Day of the Week</label>
              <br></br>
              <div
                className="segmented-control"
                id="day"
                onChange={(event) => setDay(event.target.id)}
              >
                <input
                  className="changeType"
                  type="radio"
                  name="day"
                  id="mon"
                />
                <label for="mon" name="day">
                  Monday
                </label>
                <input
                  className="changeType"
                  type="radio"
                  name="day"
                  id="tue"
                />
                <label for="tue">Tuesday</label>
                <input
                  className="changeType"
                  type="radio"
                  name="day"
                  id="wed"
                />
                <label for="wed">Wednesday</label>
                <input
                  className="changeType"
                  type="radio"
                  name="day"
                  id="thu"
                />
                <label for="mon" name="day">
                  Thursday
                </label>
                <input
                  className="changeType"
                  type="radio"
                  name="day"
                  id="fri"
                />
                <label for="tue">Friday</label>
                <input
                  className="changeType"
                  type="radio"
                  name="day"
                  id="sat"
                />
                <label for="wed">Saturday</label>
                <input
                  className="changeType"
                  type="radio"
                  name="day"
                  id="sun"
                />
                <label for="wed">Sunday</label>
              </div>
              <br></br>
              <label htmlFor="meal">Meal of the Day</label>
              <br></br>
              <div
                className="segmented-control"
                id="type"
                onChange={(event) => setType(event.target.id)}
              >
                <input
                  className="changeType"
                  type="radio"
                  name="type"
                  id="break"
                />
                <label for="break" name="type">
                  Breakfast
                </label>
                <input
                  className="changeType"
                  type="radio"
                  name="type"
                  id="lunch"
                />
                <label for="lunch">Lunch</label>
                <input
                  className="changeType"
                  type="radio"
                  name="type"
                  id="dinnr"
                />
                <label for="dinner">Dinner</label>
              </div>
              <br></br>
              <label htmlFor="name">Name of Recipe</label>
              <br></br>
              <input
                value={mealname}
                onChange={(event) => setMealname(event.target.value)}
                type="text"
                placeholder="Name of Recipe"
                name="name"
                required
              ></input>
              <br></br>

              <label htmlFor="ingredients">Ingredients</label>
              <br></br>
              <textarea
                value={ingredients}
                onChange={(event) => setIngredients(event.target.value)}
                type="textarea"
                placeholder="Ingredients required for the recipe"
                name="ingredients"
                required
              ></textarea>
              <br></br>
              <button type="submit">Add to Planner</button>
            </form>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </Container>
  );
}

export default EnterMeal;
