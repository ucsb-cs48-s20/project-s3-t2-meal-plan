import Layout from "../components/Layout";
import { optionalAuth } from "../utils/ssr";
import Table from "../components/Table";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import useSWR from "swr";

export const getServerSideProps = optionalAuth;

function HomePage(props) {
  const user = props.user;

  return (
    <Layout user={user}>
      <Head>
        <title>Meal Planner</title>
      </Head>
      {user ? (
        <>
          <style jsx>
            {`
              h1 {
                padding-top: 15px;
                padding-bottom: 15px;
              }
            `}
          </style>
          <h1>Weekly Meal Planner</h1>
          <Button href="/form">Enter Meal</Button>
          {Table(props)}
        </>
      ) : (
        <div>
          You're not logged in! Login to see your personal meal planner!
        </div>
      )}
    </Layout>
  );
}
export default HomePage;
