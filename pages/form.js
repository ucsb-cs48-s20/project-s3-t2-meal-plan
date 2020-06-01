import Layout from "../components/Layout";
import { requiredAuth } from "../utils/ssr";
import EnterMeal from "../components/EnterMeal";

import Head from "next/head";
import Button from "react-bootstrap/Button";

import React, { Component, useState } from "react";
import fetch from "isomorphic-unfetch";

export const getServerSideProps = requiredAuth;

function form(props) {
  const user = props.user;
  const [username, setUsername] = useState(user.nickname);
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
  };

  return (
    <Layout user={user}>
      <Head>
        <title>Enter a Meal</title>
      </Head>
      <div> {EnterMeal(props)} </div>
    </Layout>
  );
}

export default form;
