import Layout from "../components/Layout";
import { optionalAuth } from "../utils/ssr";

import Head from "next/head";

export const getServerSideProps = optionalAuth;

function HomePage(props) {
  const user = props.user;

  return (
    <Layout user={user}>
      <Head>
        <title>Meal Planner</title>
        {/* title on tab */}
      </Head>
      {user ? (
        <div>
          {/* You're logged in! Here's what the server knows about you:
          <pre>{JSON.stringify(user, null, "\t")}</pre> */}
          <h1>Weekly Meal Planner</h1>
          <table>
            <style jsx>
              {`
                td {
                  padding-bottom: 20px;
                }
                h3 {
                  padding-top: 20px;
                  width: 150px;
                }
                h5 {
                  text-decoration: underline;
                }
              `}
            </style>
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
              </td>
              <td>
                <h5>Breakfast</h5>
              </td>
              <td>
                <h5>Breakfast</h5>
              </td>
              <td>
                <h5>Breakfast</h5>
              </td>
              <td>
                <h5>Breakfast</h5>
              </td>
              <td>
                <h5>Breakfast</h5>
              </td>
              <td>
                <h5>Breakfast</h5>
              </td>
            </tr>
            <tr>
              <td>input</td>
            </tr>
            <tr>
              <td>
                <h5>Lunch</h5>
              </td>
              <td>
                <h5>Lunch</h5>
              </td>
              <td>
                <h5>Lunch</h5>
              </td>
              <td>
                <h5>Lunch</h5>
              </td>
              <td>
                <h5>Lunch</h5>
              </td>
              <td>
                <h5>Lunch</h5>
              </td>
              <td>
                <h5>Lunch</h5>
              </td>
            </tr>
            <tr>
              <td>input</td>
            </tr>
            <tr>
              <td>
                <h5>Dinner</h5>
              </td>
              <td>
                <h5>Dinner</h5>
              </td>
              <td>
                <h5>Dinner</h5>
              </td>
              <td>
                <h5>Dinner</h5>
              </td>
              <td>
                <h5>Dinner</h5>
              </td>
              <td>
                <h5>Dinner</h5>
              </td>
              <td>
                <h5>Dinner</h5>
              </td>
            </tr>
            <tr>
              <td>input</td>
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
