import Layout from "../components/Layout";
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
    //console.log(username, day, type, mealname, ingredients.split(/[ ,]+/));
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
              `}
            </style>
            <form onSubmit={saveRecipe}>
              <h1>Enter a Meal</h1>
              <label htmlFor="day">Day of the Week</label>
              <br></br>
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
              <label htmlFor="meal">Meal of the Day</label>
              <br></br>
              <select onChange={(event) => setType(event.target.value)}>
                <option>Select Meal</option>
                <option value="break">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinnr">Dinner</option>
              </select>
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
              <Button type="submit" variant="outline-primary">
                Add to Planner
              </Button>
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
