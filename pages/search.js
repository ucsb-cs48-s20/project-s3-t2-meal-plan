import React, { useEffect, useState } from "react";
import { fetch } from "../utils/fetch";
import Layout from "../components/Layout";
import { optionalAuth } from "../utils/ssr";
import Recipe from "../utils/Recipe";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import config from "../utils/config";
import EnterMeal from "../components/EnterMeal";

export const getServerSideProps = optionalAuth;

function Search(props) {
  const user = props.user;
  //const API_ID= config.REACT_APP_API_ID;
  //const API_KEY = config.REACT_APP_API_KEY;
  const API_ID = `392fb82a`;
  const API_KEY = `4b6ad0674d6814b6f219705f6a4183ea`;

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
    //console.log(response.hits.toArray()[0].recipe.label);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <Layout user={user}>
      <Head>
        <title>Search for Recipes</title>
      </Head>
      <div className="App">
        <style jsx>
          {`
             {
              margin: 0;
              padding: 0;
              background-color: rgb(255, 255, 255);
            }
            .App {
              min-height: 100vh;
              background-color: rgb(255, 255, 255);
            }
            .form {
              min-height: 10vh;
              display: flex;
              justify-content: left;
              align-items: left;
              margin-bottom: 20px;
            }
            .search-bar {
              width: 100%;
              padding: 10px;
              margin-right: 6px;
              margin-left: 6px;
              display: flex;
            }
            .piece {
              display: flex;
              flex-direction: row;
            }
            .formm {
              height: 80vh;
              overflow-y: auto;
              width: 90vh;
            }
          `}
        </style>
        <label htmlFor="ingredients">
          <h3 className="mt-2">Search for Recipes</h3>
        </label>
        <br></br>
        <form onSubmit={getSearch} className="form">
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={updateSearch}
          ></input>
          <Button type="submit">Search</Button>
        </form>
        <div className="piece">
          <div className="formm">
            <h1 className="text-center mt-4 mb-3">Recipe List</h1>
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
                />
              ))}
            </div>
          </div>
          <div> {EnterMeal(props)} </div>
        </div>
      </div>
    </Layout>
  );
}

export default Search;
