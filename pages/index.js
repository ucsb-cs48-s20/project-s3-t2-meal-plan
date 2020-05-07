import Layout from "../components/Layout";
import { optionalAuth } from "../utils/ssr";

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
        if (data[i].day == "mon") {
          if (data[i].type == "breakfast") mealMatrix[0][0] = data[i].mealname;
          if (data[i].type == "lunch") mealMatrix[0][1] = data[i].mealname;
          if (data[i].type == "dinner") mealMatrix[0][2] = data[i].mealname;
        } else if (data[i].day == "tues") {
          if (data[i].type == "breakfast") mealMatrix[1][0] = data[i].mealname;
          if (data[i].type == "lunch") mealMatrix[1][1] = data[i].mealname;
          if (data[i].type == "dinner") mealMatrix[1][2] = data[i].mealname;
        } else if (data[i].day == "wed") {
          if (data[i].type == "breakfast") mealMatrix[2][0] = data[i].mealname;
          if (data[i].type == "lunch") mealMatrix[2][1] = data[i].mealname;
          if (data[i].type == "dinner") mealMatrix[2][2] = data[i].mealname;
        } else if (data[i].day == "thur") {
          if (data[i].type == "breakfast") mealMatrix[3][0] = data[i].mealname;
          if (data[i].type == "lunch") mealMatrix[3][1] = data[i].mealname;
          if (data[i].type == "dinner") mealMatrix[3][2] = data[i].mealname;
        } else if (data[i].day == "fri") {
          if (data[i].type == "breakfast") mealMatrix[4][0] = data[i].mealname;
          if (data[i].type == "lunch") mealMatrix[4][1] = data[i].mealname;
          if (data[i].type == "dinner") mealMatrix[4][2] = data[i].mealname;
        } else if (data[i].day == "sat") {
          if (data[i].type == "breakfast") mealMatrix[5][0] = data[i].mealname;
          if (data[i].type == "lunch") mealMatrix[5][1] = data[i].mealname;
          if (data[i].type == "dinner") mealMatrix[5][2] = data[i].mealname;
        } else if (data[i].day == "sun") {
          if (data[i].type == "breakfast") mealMatrix[6][0] = data[i].mealname;
          if (data[i].type == "lunch") mealMatrix[6][1] = data[i].mealname;
          if (data[i].type == "dinner") mealMatrix[6][2] = data[i].mealname;
        }
      }
    }
  }

  return (
    <Layout user={user}>
      <Head>
        <title>Meal Planner</title>
        {/* how to change tab icon to smth else? */}
      </Head>
      {user ? (
        <div>
          <style jsx>
            {`
              h1 {
                padding-top: 15px;
                padding-bottom: 15px;
              }
              td {
                padding-bottom: 20px;
              }
              h3 {
                padding-top: 20px;
                width: 160px;
              }
              h5 {
                text-decoration: underline;
              }
            `}
          </style>
          <h1>Weekly Meal Planner</h1>
          <Button href="/form">Enter Meal</Button>
          <table>
            <tr>
              <td>
                <h3>MON</h3>
              </td>
              <td>
                <h3>TUES</h3>
              </td>
              <td>
                <h3>WED</h3>
              </td>
              <td>
                <h3>THUR</h3>
              </td>
              <td>
                <h3>FRI</h3>
              </td>
              <td>
                <h3>SAT</h3>
              </td>
              <td>
                <h3>SUN</h3>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Breakfast</h5>
                <h6>{mealMatrix[0][0]}</h6>
              </td>
              <td>
                <h5>Breakfast</h5>
                <h6>{mealMatrix[1][0]}</h6>
              </td>
              <td>
                <h5>Breakfast</h5>
                <h6>{mealMatrix[2][0]}</h6>
              </td>
              <td>
                <h5>Breakfast</h5>
                <h6>{mealMatrix[3][0]}</h6>
              </td>
              <td>
                <h5>Breakfast</h5>
                <h6>{mealMatrix[4][0]}</h6>
              </td>
              <td>
                <h5>Breakfast</h5>
                <h6>{mealMatrix[5][0]}</h6>
              </td>
              <td>
                <h5>Breakfast</h5>
                <h6>{mealMatrix[6][0]}</h6>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>
                <h5>Lunch</h5>
                <h6>{mealMatrix[0][1]}</h6>
              </td>
              <td>
                <h5>Lunch</h5>
                <h6>{mealMatrix[1][1]}</h6>
              </td>
              <td>
                <h5>Lunch</h5>
                <h6>{mealMatrix[2][1]}</h6>
              </td>
              <td>
                <h5>Lunch</h5>
                <h6>{mealMatrix[3][1]}</h6>
              </td>
              <td>
                <h5>Lunch</h5>
                <h6>{mealMatrix[4][1]}</h6>
              </td>
              <td>
                <h5>Lunch</h5>
                <h6>{mealMatrix[5][1]}</h6>
              </td>
              <td>
                <h5>Lunch</h5>
                <h6>{mealMatrix[6][1]}</h6>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>
                <h5>Dinner</h5>
                <h6>{mealMatrix[0][2]}</h6>
              </td>
              <td>
                <h5>Dinner</h5>
                <h6>{mealMatrix[1][2]}</h6>
              </td>
              <td>
                <h5>Dinner</h5>
                <h6>{mealMatrix[2][2]}</h6>
              </td>
              <td>
                <h5>Dinner</h5>
                <h6>{mealMatrix[3][2]}</h6>
              </td>
              <td>
                <h5>Dinner</h5>
                <h6>{mealMatrix[4][2]}</h6>
              </td>
              <td>
                <h5>Dinner</h5>
                <h6>{mealMatrix[5][2]}</h6>
              </td>
              <td>
                <h5>Dinner</h5>
                <h6>{mealMatrix[6][2]}</h6>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </table>
        </div>
      ) : (
        <div>
          You're not logged in! Login to see your personal meal planner!
        </div>
      )}
    </Layout>
  );
}

export default HomePage;
