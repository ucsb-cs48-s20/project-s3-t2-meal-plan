import { optionalAuth } from "../utils/ssr";
import useSWR from "swr";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import form2 from "../pages/form2";

export const getServerSideProps = optionalAuth;

function Table(props) {
  const user = props.user;
  const mealMatrix = props.mealMatrix;

  const removeRecipe = async (e) => {
    e.preventDefault();
    await fetch("/api/meal", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: e.target.id.slice(0, 3),
        type: e.target.id.slice(3, 9),
      }),
    });
    location.reload();
  };

  return (
    <Container user={user}>
      {user ? (
        <>
          <table>
            <style jsx>
              {`
                h1 {
                  padding-top: 15px;
                  padding-bottom: 15px;
                }
                h3 {
                  padding-top: 20px;
                  width: 155px;
                  color: #151b54;
                }
                h5 {
                  text-decoration: underline;
                  color: #151b54;
                  text-align: center;
                }
                button {
                  color: black;
                  background-color: lightgray;
                  font-size: 13px;
                  text-align: left;
                  // border-radius: 50%;
                  border: 2px solid lightgray;
                  margin-left: 2px;
                  margin-top: 2px;
                  position: absolute;
                }
                button:hover {
                  background-color: #e76969;
                  border: 2px solid #e76969;
                  color: white;
                }
                td {
                  vertical-align: top;
                  height: 130px;
                  border: 2px solid #151b54;
                }
                th {
                  text-align: center;
                }
                h6 {
                  font-size: 20px;
                  color: #4863a0;
                  text-align: center;
                }
                p {
                  text-align: center;
                }
                a {
                  font-size: 20px;
                  color: black;
                  padding: 2px;
                }
                a:hover {
                  background-color: lightblue;
                  font-size: 20px;
                  text-decoration: none;
                  padding-left: 7px;
                  padding-right: 7px;
                  color: white;
                  font-weight: 700;
                }
              `}
            </style>
            <tr>
              <th>
                <h3>MON</h3>
              </th>
              <th>
                <h3>TUES</h3>
              </th>
              <th>
                <h3>WED</h3>
              </th>
              <th>
                <h3>THUR</h3>
              </th>
              <th>
                <h3>FRI</h3>
              </th>
              <th>
                <h3>SAT</h3>
              </th>
              <th>
                <h3>SUN</h3>
              </th>
            </tr>
            <tr>
              <td>
                <button id="monbreak" onClick={removeRecipe}>
                  X
                </button>
                <h5>Breakfast</h5>
                <h6>{mealMatrix[0][0].mealname}</h6>
                <p>
                  <a href="/form2?day=mon&type=break">+</a>
                </p>
              </td>
              <td>
                <button id="tuebreak" onClick={removeRecipe}>
                  X
                </button>
                <h5>Breakfast</h5>
                <h6>{mealMatrix[1][0].mealname}</h6>
                <p>
                  <a href="/form2?day=tue&type=break">+</a>
                </p>
              </td>
              <td>
                <button id="wedbreak" onClick={removeRecipe}>
                  X
                </button>
                <h5>Breakfast</h5>
                <h6>{mealMatrix[2][0].mealname}</h6>
                <p>
                  <a href="/form2?day=wed&type=break">+</a>
                </p>
              </td>
              <td>
                <button id="thubreak" onClick={removeRecipe}>
                  X
                </button>
                <h5>Breakfast</h5>
                <h6>{mealMatrix[3][0].mealname}</h6>
                <p>
                  <a href="/form2?day=thu&type=break">+</a>
                </p>
              </td>
              <td>
                <button id="fribreak" onClick={removeRecipe}>
                  X
                </button>
                <h5>Breakfast</h5>
                <h6>{mealMatrix[4][0].mealname}</h6>
                <p>
                  <a href="/form2?day=fri&type=break">+</a>
                </p>
              </td>
              <td>
                <button id="satbreak" onClick={removeRecipe}>
                  X
                </button>
                <h5>Breakfast</h5>
                <h6>{mealMatrix[5][0].mealname}</h6>
                <p>
                  <a href="/form2?day=sat&type=break">+</a>
                </p>
              </td>
              <td>
                <button id="sunbreak" onClick={removeRecipe}>
                  X
                </button>
                <h5>Breakfast</h5>
                <h6>{mealMatrix[6][0].mealname}</h6>
                <p>
                  <a href="/form2?day=sun&type=break">+</a>
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <button id="monlunch" onClick={removeRecipe}>
                  X
                </button>
                <h5>Lunch</h5>
                <h6>{mealMatrix[0][1].mealname}</h6>
                <p>
                  <a href="/form2?day=mon&type=lunch">+</a>
                </p>
              </td>
              <td>
                <button id="tuelunch" onClick={removeRecipe}>
                  X
                </button>
                <h5>Lunch</h5>
                <h6>{mealMatrix[1][1].mealname}</h6>
                <p>
                  <a href="/form2?day=tue&type=lunch">+</a>
                </p>
              </td>
              <td>
                <button id="wedlunch" onClick={removeRecipe}>
                  X
                </button>
                <h5>Lunch</h5>
                <h6>{mealMatrix[2][1].mealname}</h6>
                <p>
                  <a href="/form2?day=wed&type=lunch">+</a>
                </p>
              </td>
              <td>
                <button id="thulunch" onClick={removeRecipe}>
                  X
                </button>
                <h5>Lunch</h5>
                <h6>{mealMatrix[3][1].mealname}</h6>
                <p>
                  <a href="/form2?day=thu&type=lunch">+</a>
                </p>
              </td>
              <td>
                <button id="frilunch" onClick={removeRecipe}>
                  X
                </button>
                <h5>Lunch</h5>
                <h6>{mealMatrix[4][1].mealname}</h6>
                <p>
                  <a href="/form2?day=fri&type=lunch">+</a>
                </p>
              </td>
              <td>
                <button id="satlunch" onClick={removeRecipe}>
                  X
                </button>
                <h5>Lunch</h5>
                <h6>{mealMatrix[5][1].mealname}</h6>
                <p>
                  <a href="/form2?day=sat&type=lunch">+</a>
                </p>
              </td>
              <td>
                <button id="sunlunch" onClick={removeRecipe}>
                  X
                </button>
                <h5>Lunch</h5>
                <h6>{mealMatrix[6][1].mealname}</h6>
                <p>
                  <a href="/form2?day=sun&type=lunch">+</a>
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <button id="mondinnr" onClick={removeRecipe}>
                  X
                </button>
                <h5>Dinner</h5>
                <h6>{mealMatrix[0][2].mealname}</h6>
                <p>
                  <a href="/form2?day=mon&type=dinner">+</a>
                </p>
              </td>
              <td>
                <button id="tuedinnr" onClick={removeRecipe}>
                  X
                </button>
                <h5>Dinner</h5>
                <h6>{mealMatrix[1][2].mealname}</h6>
                <p>
                  <a href="/form2?day=tue&type=dinner">+</a>
                </p>
              </td>
              <td>
                <button id="weddinnr" onClick={removeRecipe}>
                  X
                </button>
                <h5>Dinner</h5>
                <h6>{mealMatrix[2][2].mealname}</h6>
                <p>
                  <a href="/form2?day=wed&type=dinner">+</a>
                </p>
              </td>
              <td>
                <button id="thudinnr" onClick={removeRecipe}>
                  X
                </button>
                <h5>Dinner</h5>
                <h6>{mealMatrix[3][2].mealname}</h6>
                <p>
                  <a href="/form2?day=thu&type=dinner">+</a>
                </p>
              </td>
              <td>
                <button id="fridinnr" onClick={removeRecipe}>
                  X
                </button>
                <h5>Dinner</h5>
                <h6>{mealMatrix[4][2].mealname}</h6>
                <p>
                  <a href="/form2?day=fri&type=dinner">+</a>
                </p>
              </td>
              <td>
                <button id="satdinnr" onClick={removeRecipe}>
                  X
                </button>
                <h5>Dinner</h5>
                <h6>{mealMatrix[5][2].mealname}</h6>
                <p>
                  <a href="/form2?day=sat&type=dinner">+</a>
                </p>
              </td>
              <td>
                <button id="sundinnr" onClick={removeRecipe}>
                  X
                </button>
                <h5>Dinner</h5>
                <h6>{mealMatrix[6][2].mealname}</h6>
                <p>
                  <a href="/form2?day=sun&type=dinner">+</a>
                </p>
              </td>
            </tr>
          </table>
          <Button
            id="clearall"
            onClick={removeRecipe}
            variant="outline-info"
            style={{ marginTop: "10px" }}
          >
            Clear all
          </Button>
        </>
      ) : (
        <div></div>
      )}
    </Container>
  );
}
export default Table;
