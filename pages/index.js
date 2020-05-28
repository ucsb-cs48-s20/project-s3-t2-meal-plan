import Layout from "../components/Layout";
import { optionalAuth } from "../utils/ssr";
import Table from "../components/Table";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import useSWR from "swr";

export const getServerSideProps = optionalAuth;

function HomePage(props) {
  const user = props.user;
  const mealMatrix = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const { data } = useSWR("/api/meal");

  if (data) {
    for (let i = 0; i < 21; i++) {
      if (data[i]) {
        let dayy = -1;
        let typee = -1;
        if (data[i].day == "mon") dayy = 0;
        if (data[i].day == "tue") dayy = 1;
        if (data[i].day == "wed") dayy = 2;
        if (data[i].day == "thu") dayy = 3;
        if (data[i].day == "fri") dayy = 4;
        if (data[i].day == "sat") dayy = 5;
        if (data[i].day == "sun") dayy = 6;
        if (data[i].type == "break") typee = 0;
        if (data[i].type == "lunch") typee = 1;
        if (data[i].type == "dinnr") typee = 2;
        if (dayy != -1 && typee != -1) mealMatrix[dayy][typee] = data[i];
      }
    }
  }

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

          <Table user={user} mealMatrix={mealMatrix}></Table>
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
