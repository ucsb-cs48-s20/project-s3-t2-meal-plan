import Layout from "../components/Layout";
import { requiredAuth } from "../utils/ssr";

import Head from "next/head";
import Button from "react-bootstrap/Button";

import React, { Component } from "react";

// function idkyet() {
//   // edit this, mirrored off woof-private.js, idk what it's supposed to do
//   return (
//     <Layout>
//       <div>
//         <p>idk what this does</p>
//       </div>
//     </Layout>
//   );
// }

export const getServerSideProps = requiredAuth;

function EnterMeal(props) {
  const user = props.user;

  return (
    <Layout user={user}>
      <Head>
        <title>Enter Meal</title>
      </Head>
      <div>
        <p>
          work in progress... front-end done, not sure about back-end/database
        </p>

        <style jsx>
          {`
            label {
              padding-top: 20px;
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
        <form action="/action_page.php">
          <h1>Enter a Meal</h1>
          <label htmlFor="day">
            <b>Day of the Week</b>
          </label>
          <br></br>
          <select>
            <option>Select Day</option>
            <option value="mon">Monday</option>
            <option value="tues">Tuesday</option>
            <option value="wed">Wednesday</option>
            <option value="thur">Thursday</option>
            <option value="fri">Friday</option>
            <option value="sat">Saturday</option>
            <option value="sun">Sunday</option>
          </select>
          <br></br>

          <label htmlFor="meal">
            <b>Meal of the Day</b>
          </label>
          <br></br>
          <select>
            <option>Select Meal</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          <br></br>

          <label htmlFor="name">
            <b>Name of Recipe</b>
          </label>
          <br></br>
          <input
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
            type="textarea"
            placeholder="Ingredients required for the recipe"
            name="ingredients"
            required
          ></textarea>
          {/* not sure how textarea will affect input */}
        </form>
        <br></br>
        <Button href="/">Add to Planner</Button>
        <p>
          By clicking this button, you will be redirected back to your planner
          with your added meal.
        </p>
      </div>
    </Layout>
  );
}

export default EnterMeal;
