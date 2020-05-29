import Layout from "../components/Layout";
import { requiredAuth } from "../utils/ssr";
import Container from "react-bootstrap/Container";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import React, { Component, useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { redirectTo } from "@reach/router";

export const getServerSideProps = requiredAuth;

function form2(props) {
  const router = useRouter();
  const user = props.user;
  const [username, setUsername] = useState(props.user.nickname);
  // issue with nickname in storybook
  const [mealname, setMealname] = useState("");
  const [day, setDay] = useState("");
  const [type, setType] = useState("");
  const [ingredients, setIngredients] = useState("");
  useEffect(() => {
    setDay(router.query.day);
    setType(router.query.type);
  }, [router.query.day, router.query.type]);
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
    <Layout user={user}>
      <Head>
        <title>Enter a Meal</title>
      </Head>
      <Container>
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
                <h1>Enter a Meal </h1>
                <label htmlFor="day">
                  <b>Day of the Week</b>
                </label>
                <br></br>
                <select
                  value={day}
                  onChange={(event) => setDay(event.target.value)}
                >
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
                <label htmlFor="meal">
                  <b>Meal of the Day</b>
                </label>
                <br></br>
                <select
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                >
                  <option>Select Meal</option>
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
              </form>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </Container>
    </Layout>
  );
}

export default form2;
