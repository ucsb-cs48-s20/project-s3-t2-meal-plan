import { requiredAuth } from "../utils/ssr";
import Container from "react-bootstrap/Container";
import Head from "next/head";
import Button from "react-bootstrap/Button";

import React, { Component, useState } from "react";
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
                  padding: 10px;
                }
                label {
                  padding: 10px;
                }
                input,
                textarea {
                  padding: 5px;
                  width: 500px;
                }
                select {
                  padding: 5px;
                }
              `}
            </style>
            <form onSubmit={saveRecipe}>
              <h1>Enter a Meal</h1>
              <label htmlFor="day">
                <b>Day of the Week</b>
              </label>
              <br></br>
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
              <label htmlFor="meal">
                <b>Meal of the Day</b>
              </label>
              <br></br>
              <select onChange={(event) => setType(event.target.value)}>
                <option value="">Select Meal</option>
                <option value="break">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinnr">Dinner</option>
              </select>
              <br></br>
              <label htmlFor="name">
                <b>Name of Recipe</b>
              </label>
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

              <label htmlFor="ingredients">
                <b>Ingredients</b>
              </label>
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
              <Button type="submit">Add to Planner</Button>
              <br></br>
              <br></br>
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
