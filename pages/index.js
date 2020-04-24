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
            <tr>
              <td>
                <h3>Monday</h3>
              </td>
              <td>
                <h3>Tuesday</h3>
              </td>
              <td>
                <h3>Wednesday</h3>
              </td>
              <td>
                <h3>Thursday</h3>
              </td>
              <td>
                <h3>Friday</h3>
              </td>
              <td>
                <h3>Saturday</h3>
              </td>
              <td>
                <h3>Sunday</h3>
              </td>
            </tr>
            <tr>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
            </tr>
            <br></br>
            <tr>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
            </tr>
            <br></br>
            <tr>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
            </tr>
            <br></br>
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
