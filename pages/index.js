import Layout from "../components/Layout";
import { optionalAuth } from "../utils/ssr";
import Table from "../components/Table";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import useSWR from "swr";

export const getServerSideProps = optionalAuth;

function HomePage(props) {
  const user = props.user;
  // Initializing Matrix
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
  // Iniitializing day and type values for matrix
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
      {/* If logged in: */}
      {user ? (
        <>
          <style jsx>
            {`
              h2 {
                margin-top: 10px;
                margin-bottom: 10px;
                letter-spacing: 1px;
                font-size: 38px;
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
              a {
                text-decoration: none;
              }
              .scrollTable {
                width: auto;
                overflow-x: auto;
              }
            `}
          </style>
          <h2>Weekly Meal Planner</h2>
          <a href="/form">
            <button> Enter Meal</button>
          </a>
          <div className="scrollTable">
            <Table user={user} mealMatrix={mealMatrix}></Table>
          </div>
        </>
      ) : (
        /* If not logged in: */
        <div>
          You're not logged in! Login to see your personal meal planner!
        </div>
      )}
    </Layout>
  );
}
export default HomePage;
