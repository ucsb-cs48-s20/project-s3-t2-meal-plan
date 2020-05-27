import { optionalAuth } from "../utils/ssr";
import useSWR from "swr";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export const getServerSideProps = optionalAuth;

function Table(props) {
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
                  font-size: 20px;
                  text-align: right;
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
                <h6>{mealMatrix[0][0].mealname}</h6>
              </td>
              <td>
                <h5>
                  Breakfast
                  <button id="tuebreak" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[1][0].mealname}</h6>
              </td>
              <td>
                <h5>
                  Breakfast
                  <button id="wedbreak" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[2][0].mealname}</h6>
              </td>
              <td>
                <h5>
                  Breakfast
                  <button id="thubreak" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[3][0].mealname}</h6>
              </td>
              <td>
                <h5>
                  Breakfast
                  <button id="fribreak" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[4][0].mealname}</h6>
              </td>
              <td>
                <h5>
                  Breakfast
                  <button id="satbreak" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[5][0].mealname}</h6>
              </td>
              <td>
                <h5>
                  Breakfast
                  <button id="sunbreak" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[6][0].mealname}</h6>
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
              </td>
              <td>
                <h5>
                  Lunch
                  <button id="tuelunch" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[1][1].mealname}</h6>
              </td>
              <td>
                <h5>
                  Lunch
                  <button id="wedlunch" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[2][1].mealname}</h6>
              </td>
              <td>
                <h5>
                  Lunch
                  <button id="thulunch" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[3][1].mealname}</h6>
              </td>
              <td>
                <h5>
                  Lunch
                  <button id="frilunch" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[4][1].mealname}</h6>
              </td>
              <td>
                <h5>
                  Lunch
                  <button id="satlunch" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[5][1].mealname}</h6>
              </td>
              <td>
                <h5>
                  Lunch
                  <button id="sunlunch" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[6][1].mealname}</h6>
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
              </td>
              <td>
                <h5>
                  Dinner
                  <button id="tuedinnr" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[1][2].mealname}</h6>
              </td>
              <td>
                <h5>
                  Dinner
                  <button id="weddinnr" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[2][2].mealname}</h6>
              </td>
              <td>
                <h5>
                  Dinner
                  <button id="thudinnr" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[3][2].mealname}</h6>
              </td>
              <td>
                <h5>
                  Dinner
                  <button id="fridinnr" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[4][2].mealname}</h6>
              </td>
              <td>
                <h5>
                  Dinner
                  <button id="satdinnr" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[5][2].mealname}</h6>
              </td>
              <td>
                <h5>
                  Dinner
                  <button id="sundinnr" onClick={removeRecipe}>
                    X
                  </button>
                </h5>
                <h6>{mealMatrix[6][2].mealname}</h6>
              </td>
            </tr>
          </table>
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
