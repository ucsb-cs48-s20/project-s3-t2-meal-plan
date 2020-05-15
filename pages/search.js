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
        </form>
      </div>
    </Layout>
  );
}

export default Search;
