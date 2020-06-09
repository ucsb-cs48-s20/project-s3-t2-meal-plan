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
    location.reload();
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
    location.reload();
  };

  const HandleList = async (e) => {
    await fetch("/api/list", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        ingredient: e.target.id,
        deleteStatus: document.getElementById(e.target.id).checked,
      }),
    });
  };

  const printIt = () => {
    const { data } = useSWR("/api/list");
    if (!data) {
      return <li></li>;
    }
    return (
      <ul>
        {data.map(function (item, index) {
          return (
            <>
              <style jsx>
                {`
                  p {
                    font-weight: 400;
                    font-size: 18px;
                  }
                `}
              </style>
              <p key={index}>
                <input
                  type="checkbox"
                  id={item.ingredient}
                  onChange={HandleList}
                  value={item.ingredient}
                />{" "}
                {item.ingredient}
                <br></br>
              </p>
            </>
          );
        })}
      </ul>
    );
  };

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
        deleteStatus: false,
      }),
    });
    location.reload();
  };

  return (
    <Layout user={user}>
      {user ? (
        <div>
          <Head>
            <title>Shopping List</title>
          </Head>
          <style jsx>
            {`
              form {
                padding: 10px;
              }
              label {
                padding: 10px;
              }
              input {
                padding: 5px;
                width: 500px;
              }
              select {
                padding: 5px;
              }
              p {
                font-size: 20px;
                font-weight: 500;
                margin-left: 20px;
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
              h3 {
                margin-left: 10px;
                margin-bottom: 15px;
              }
              .del {
                background-color: white;
                border-radius: 4px;
                padding: 7px;
                border: 2px solid #e76969;
                font-size: 16px;
                color: #e76969;
                margin-top: 10px;
                font-weight: 500;
                margin-left: 10px;
              }
              .del:hover {
                background-color: #e76969;
                color: white;
              }
              .scrollList {
                overflow-y: auto;
                height: 52vh;
              }
            `}
          </style>
          <div>
            <form onSubmit={saveIngredient}>
              <h2>Shopping List</h2>
              <label htmlFor="ingredient">
                <p>Add To List:</p>
              </label>
              <input
                value={ingredient}
                onChange={(event) => setIngredient(event.target.value)}
                type="text"
                placeholder="Name of Item"
                name="ingredient"
                required
              ></input>
              {"  "}
              <button type="submit">Add</button>
              <br></br>
            </form>
          </div>
          <h3>To Buy:</h3>
          <div className="scrollList">{printIt()}</div>
          <button onClick={removeSelected} className="del">
            Remove Selected
          </button>
          {""}
          <button onClick={removeAll} className="del">
            Clear List
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </Layout>
  );
}

export default List;
