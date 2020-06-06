import { optionalAuth } from "../utils/ssr";
import useSWR from "swr";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import form2 from "../pages/form2";
import Popup from "reactjs-popup";
//import showIngred from "../utils/showIngred"

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

  const showIngred = (e) => {
    e.preventDefault();
    for (
      var i = 0;
      i <
      mealMatrix[e.target.id.slice(0, 1)][e.target.id.slice(1, 2)].ingredients
        .length;
      i++
    ) {
      alert(
        <li>
          {
            mealMatrix[e.target.id.slice(0, 1)][e.target.id.slice(1, 2)]
              .ingredients[i]
          }
        </li>
      );
    }
  };

  const showIngred2 = (e) => {
    e.preventDefault();
    mealMatrix[e.target.id.slice(0, 1)][
      e.target.id.slice(1, 2)
    ].ingredients.map((i) => alert(JSON.stringify({ i })));
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
                td {
                  padding-bottom: 20px;
                }
                h3 {
                  padding-top: 20px;
                  width: 160px;
                  color: #151b54;
                }
                h5 {
                  text-decoration: underline;
                  color: #151b54;
                }
                button {
                  color: black;
                  background-color: lightgray;
                  font-size: 15px;
                  text-align: right;
                  border-radius: 50%;
                }
                button:hover {
                  background-color: crimson;
                }
                td {
                  vertical-align: top;
                  height: 150px;
                  border: 2px solid #151b54;
                  text-align: center;
                }
                th {
                  text-align: center;
                }
                h6 {
                  font-size: 20px;
                  color: #4863a0;
                }
                h2 {
                  font-size: 20px;
                }
                a {
                  font-size: 20px;
                  color: black;
                  padding: 2px;
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
                <h5>
                  Breakfast
                  <button id="monbreak" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <Popup
                  trigger={<h6 role="button"> {mealMatrix[0][0].mealname} </h6>}
                  modal
                  closeOnDocumentClicksho
                >
                  <h2 style={{ fontWeight: "bold" }}>Ingredients</h2>
                  <h2 role="Button" onClick={showIngred} id="00">
                    click
                  </h2>
                </Popup>
                <a href="/form2?day=mon&type=break">+</a>
              </td>
              <td>
                <h5>
                  Breakfast
                  <button id="tuebreak" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[1][0].mealname}</h6>
                <a href="/form2?day=tue&type=break">+</a>
              </td>
              <td>
                <h5>
                  Breakfast
                  <button id="wedbreak" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[2][0].mealname}</h6>
                <a href="/form2?day=wed&type=break">+</a>
              </td>
              <td>
                <h5>
                  Breakfast
                  <button id="thubreak" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[3][0].mealname}</h6>
                <a href="/form2?day=thu&type=break">+</a>
              </td>
              <td>
                <h5>
                  Breakfast
                  <button id="fribreak" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[4][0].mealname}</h6>
                <a href="/form2?day=fri&type=break">+</a>
              </td>
              <td>
                <h5>
                  Breakfast
                  <button id="satbreak" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[5][0].mealname}</h6>
                <a href="/form2?day=sat&type=break">+</a>
              </td>
              <td>
                <h5>
                  Breakfast
                  <button id="sunbreak" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[6][0].mealname}</h6>
                <a href="/form2?day=sun&type=break">+</a>
              </td>
            </tr>

            <tr>
              <td>
                <h5>
                  Lunch
                  <button id="monlunch" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[0][1].mealname}</h6>
                <a href="/form2?day=mon&type=lunch">+</a>
              </td>
              <td>
                <h5>
                  Lunch
                  <button id="tuelunch" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[1][1].mealname}</h6>
                <a href="/form2?day=tue&type=lunch">+</a>
              </td>
              <td>
                <h5>
                  Lunch
                  <button id="wedlunch" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[2][1].mealname}</h6>
                <a href="/form2?day=wed&type=lunch">+</a>
              </td>
              <td>
                <h5>
                  Lunch
                  <button id="thulunch" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[3][1].mealname}</h6>
                <a href="/form2?day=thu&type=lunch">+</a>
              </td>
              <td>
                <h5>
                  Lunch
                  <button id="frilunch" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[4][1].mealname}</h6>
                <a href="/form2?day=fri&type=lunch">+</a>
              </td>
              <td>
                <h5>
                  Lunch
                  <button id="satlunch" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[5][1].mealname}</h6>
                <a href="/form2?day=sat&type=lunch">+</a>
              </td>
              <td>
                <h5>
                  Lunch
                  <button id="sunlunch" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[6][1].mealname}</h6>
                <a href="/form2?day=sun&type=lunch">+</a>
              </td>
            </tr>

            <tr>
              <td>
                <h5>
                  Dinner
                  <button id="mondinnr" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[0][2].mealname}</h6>
                <a href="/form2?day=mon&type=dinner">+</a>
              </td>
              <td>
                <h5>
                  Dinner
                  <button id="tuedinnr" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[1][2].mealname}</h6>
                <a href="/form2?day=tue&type=dinner">+</a>
              </td>
              <td>
                <h5>
                  Dinner
                  <button id="weddinnr" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[2][2].mealname}</h6>
                <a href="/form2?day=wed&type=dinner">+</a>
              </td>
              <td>
                <h5>
                  Dinner
                  <button id="thudinnr" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[3][2].mealname}</h6>
                <a href="/form2?day=thu&type=dinner">+</a>
              </td>
              <td>
                <h5>
                  Dinner
                  <button id="fridinnr" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[4][2].mealname}</h6>
                <a href="/form2?day=fri&type=dinner">+</a>
              </td>
              <td>
                <h5>
                  Dinner
                  <button id="satdinnr" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[5][2].mealname}</h6>
                <a href="/form2?day=sat&type=dinner">+</a>
              </td>
              <td>
                <h5>
                  Dinner
                  <button id="sundinnr" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[6][2].mealname}</h6>
                <a href="/form2?day=sun&type=dinner">+</a>
              </td>
            </tr>
          </table>
          <br></br>
          <Button id="clearall" onClick={removeRecipe}>
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
