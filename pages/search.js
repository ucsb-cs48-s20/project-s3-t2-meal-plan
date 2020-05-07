import useSWR from "swr";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import { fetch } from "../utils/fetch";
import Layout from "../components/Layout";
import { optionalAuth } from "../utils/ssr";

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
        <p>Search for Recipes work in progress...</p>
      </div>
    </Layout>
  );
}

export default Search;
