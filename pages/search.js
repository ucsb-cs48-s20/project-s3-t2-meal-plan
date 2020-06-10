import React, { useEffect, useState } from "react";
import { fetch } from "../utils/fetch";
import Layout from "../components/Layout";
import { optionalAuth } from "../utils/ssr";
import Recipe from "../utils/Recipe";
import Head from "next/head";

export const getServerSideProps = optionalAuth;

export default function Search(props) {
  const user = props.user;
  const API_ID = process.env.API_ID;
  const API_KEY = process.env.API_KEY;

  const [allRecipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    setRecipe(response.hits);
    const recipeOptions = [];
    let alertBoolean = true;
    for (var i = 0; i < 20; i++) {
      if (response.hits[i]) {
        recipeOptions[i] = response.hits[i].recipe.label;
        alertBoolean = false;
      } else {
        if (query != "" && alertBoolean) {
          alert("No Recipe Found");
          alertBoolean = false;
        }
      }
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getsearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <Layout user={user}>
      <Head>
        <title>Search for Recipes</title>
      </Head>
      <div className="Search_page">
        <style jsx>
          {`
            .Search_page {
              height: 440px;
            }
            .form {
              height: 50px;
              display: flex;
              align-items: left;
              margin-bottom: 20px;
            }
            .formmm {
              padding: 20px;
            }
            .search-bar {
              width: 90%;
              padding: 10px;
              margin-right: 6px;
              margin-left: 6px;
              display: flex;
            }
            .form_search {
              height: 62vh;
              overflow-y: auto;
              width: 100%;
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
            .rec {
              text-align: center;
              font-size: 40px;
              text-decoration: underline;
            }
          `}
        </style>
        <label htmlFor="ingredients">
          <h2 className="mt-2">Search for Recipes</h2>
        </label>
        <br></br>
        <form onSubmit={getsearch} className="form">
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={updateSearch}
            required
          ></input>
          <button type="submit">Search</button>
        </form>
        <div>
          <h3 className="rec">Recipe List</h3>
          <div className="form_search">
            <div className="d-flex justify-content-around flex-wrap">
              {allRecipe.map((r) => (
                <Recipe
                  key={r.recipe.label}
                  title={r.recipe.label}
                  label={r.recipe.label}
                  calory={r.recipe.calories}
                  image={r.recipe.image}
                  ingredients={r.recipe.ingredients}
                  url={r.recipe.url}
                  user={user.nickname}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
