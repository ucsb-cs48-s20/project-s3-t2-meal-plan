import useSWR from "swr";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import { fetch } from "../utils/fetch";
import Layout from "../components/Layout";
import { requiredAuth } from "../utils/ssr";

import Head from "next/head";

export const getServerSideProps = requiredAuth;

function List(props) {
  const user = props.user;

  return (
    <Layout user={user}>
      <Head>
        <title>Shopping List</title>
      </Head>
      <div>
        <p>Shopping List work in progress...</p>
      </div>
    </Layout>
  );
}

export default List;
