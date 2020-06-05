import React, { Component, useState, useEffect } from "react";
import useSWR from "swr";
import { fetch } from "../utils/fetch";
import Layout from "../components/Layout";
import { requiredAuth } from "../utils/ssr";
import Button from "react-bootstrap/Button";
import Head from "next/head";

export const getServerSideProps = requiredAuth;

function List(props) {
  const user = props.user;
  const [username, setUsername] = useState(props.user.nickname);
  const [ingredient, setIngredient] = useState("");
  const [list, setList] = useState("");
  const { data } = useSWR("/api/list");

  const removeSelected = async (e) => {
    e.preventDefault;
    await fetch("/api/list", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        amount: "some",
      }),
    });
    //location.reload();
  };
  const removeAll = async (e) => {
    e.preventDefault;
    await fetch("/api/list", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        amount: "all",
      }),
    });
    //location.reload();
  };

  const HandleList = async (e) => {
    console.log(document.getElementById(e.target.id).checked);
    await fetch("/api/list", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        ingredient: ingredient,
        deleteStatus: document.getElementById(e.target.id).checked,
      }),
    });
  };

  const printIt = () => {
    const { data } = useSWR("/api/list");
    console.log(data);
    if (!data) {
      return <p>No items</p>;
    }
    return (
      <ul>
        {data.map(function (item, index) {
          return (
            <li key={index}>
              <input
                type="checkbox"
                id={item.ingredient}
                onChange={HandleList}
                value={item.ingredient}
              />{" "}
              {item.ingredient}
            </li>
          );
        })}
      </ul>
    );
  };

  const saveIngredient = async (e) => {
    console.log(ingredient);
    e.preventDefault();
    await fetch("/api/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        ingredient: ingredient,
        delete: "false",
      }),
    });
    console.log(username, ingredient);
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
          {printIt()}
          <Button onClick={removeSelected}>Remove Selected</Button>
          <br></br>
          <br></br>
          <Button onClick={removeAll}>Clear List</Button>
        </div>
      ) : (
        <div></div>
      )}
    </Layout>
  );
}

export default List;
