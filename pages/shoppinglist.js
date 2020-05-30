import React, { Component, useState, useEffect } from "react";
import useSWR from "swr";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import { fetch } from "../utils/fetch";
import Layout from "../components/Layout";
import { requiredAuth } from "../utils/ssr";
import Button from "react-bootstrap/Button";
import Head from "next/head";
import Container from "react-bootstrap/Container";

export const getServerSideProps = requiredAuth;

function List(props) {
  const user = props.user;
  const { data } = useSWR("/api/list");
  //db.collection.find( { username: { $eq: this.state.username } } )
  const [username, setUsername] = useState(props.user.nickname);
  const [ingredient, setIngredient] = useState("");
  const saveIngredient = async (e) => {
    e.preventDefault();
    await fetch("/api/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        ingredient: ingredient,
      }),
    });
    location.reload();
    alert("Added Ingredient");
  };
  return (
    <Layout user={user}>
      {user ? (
        <div>
          <Head>
            <title>Shopping List</title>
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
            <form onSubmit={saveIngredient}>
              <h1>Shopping List</h1>
              <label htmlFor="ingredient">
                <b>Add To List:</b>
              </label>
              <input
                value={ingredient}
                onChange={(event) => setIngredient(event.target.value)}
                type="text"
                placeholder="Name of Item"
                name="ingredient"
                required
              ></input>
              <Button type="submit">Add</Button>
              <br></br>
              <br></br>
            </form>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </Layout>
  );
}

export default List;
