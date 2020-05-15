import useSWR from "swr";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import { fetch } from "../utils/fetch";
import Layout from "../components/Layout";
import { optionalAuth } from "../utils/ssr";
import Button from "react-bootstrap/Button";

import Head from "next/head";

export const getServerSideProps = optionalAuth;

function Search(props) {
  const user = props.user;

  return (
    <Layout user={user}>
      <Head>
        <title>Search for Recipes</title>
      </Head>
      <div>
        <style jsx>
          {`
            label {
              padding-top: 20px;
            }
            input,
            textarea {
              padding: 5px;
              width: 90%;
              border-radius: 5px;
            }
            button {
              padding: 5px;
            }
          `}
        </style>
        <form>
          <label htmlFor="ingredients">
            <h3>Search for Recipes</h3>
          </label>
          <br></br>
          <input
            type="text"
            placeholder="Search by recipe name (or ingredients TBD)"
            name="searchRecipe"
            required
          ></input>
          <button type="submit">Search</button>
          <br></br>
          <p>
            can we make it show that the results show under the search bar or
            should the page reload with the search results. i think it wud be
            more efficient if we could show the search results under the search
            bar so that it's easier for the user to search again for something
            else.
            <br></br>
            <br></br>
            so on enter: should display title "Search Results:" and results
            under
          </p>
        </form>
      </div>
    </Layout>
  );
}

export default Search;
