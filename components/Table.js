import { optionalAuth } from "../utils/ssr";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

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

  function checkButton(dayy, typee, dayString) {
    if (mealMatrix[dayy][typee].mealname) {
      return (
        <button id={dayString} onClick={removeRecipe}>
          <style jsx>
            {`
              button {
                color: black;
                background-color: lightgray;
                font-size: 15px;
                text-align: right;
                border-radius: 50%;
              }
            `}
          </style>
          X
        </button>
      );
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
                  {checkButton(0, 0, "monbreak")}
                </h5>
                <h6>{mealMatrix[0][0].mealname}</h6>
                <a href="/form2?day=mon&type=break">+</a>
              </td>
              <td>
                <h5>
                  Breakfast
                  {checkButton(1, 0, "tuebreak")}
                </h5>
                <h6>{mealMatrix[1][0].mealname}</h6>
                <a href="/form2?day=tue&type=break">+</a>
              </td>
              <td>
                <h5>
                  Breakfast
                  {checkButton(2, 0, "wedbreak")}
                </h5>
                <h6>{mealMatrix[2][0].mealname}</h6>
                <a href="/form2?day=wed&type=break">+</a>
              </td>
              <td>
                <h5>
                  Breakfast
                  {checkButton(3, 0, "thubreak")}
                </h5>
                <h6>{mealMatrix[3][0].mealname}</h6>
                <a href="/form2?day=thu&type=break">+</a>
              </td>
              <td>
                <h5>
                  Breakfast
                  {checkButton(4, 0, "fribreak")}
                </h5>
                <h6>{mealMatrix[4][0].mealname}</h6>
                <a href="/form2?day=fri&type=break">+</a>
              </td>
              <td>
                <h5>
                  Breakfast
                  {checkButton(5, 0, "satbreak")}
                </h5>
                <h6>{mealMatrix[5][0].mealname}</h6>
                <a href="/form2?day=sat&type=break">+</a>
              </td>
              <td>
                <h5>
                  Breakfast
                  {checkButton(6, 0, "sunbreak")}
                </h5>
                <h6>{mealMatrix[6][0].mealname}</h6>
                <a href="/form2?day=sun&type=break">+</a>
              </td>
            </tr>

            <tr>
              <td>
                <h5>
                  Lunch
                  {checkButton(0, 1, "monlunch")}
                </h5>
                <h6>{mealMatrix[0][1].mealname}</h6>
                <a href="/form2?day=mon&type=lunch">+</a>
              </td>
              <td>
                <h5>
                  Lunch
                  {checkButton(1, 1, "tuelunch")}
                </h5>
                <h6>{mealMatrix[1][1].mealname}</h6>
                <a href="/form2?day=tue&type=lunch">+</a>
              </td>
              <td>
                <h5>
                  Lunch
                  {checkButton(2, 1, "wedlunch")}
                </h5>
                <h6>{mealMatrix[2][1].mealname}</h6>
                <a href="/form2?day=wed&type=lunch">+</a>
              </td>
              <td>
                <h5>
                  Lunch
                  {checkButton(3, 1, "thulunch")}
                </h5>
                <h6>{mealMatrix[3][1].mealname}</h6>
                <a href="/form2?day=thu&type=lunch">+</a>
              </td>
              <td>
                <h5>
                  Lunch
                  {checkButton(4, 1, "frilunch")}
                </h5>
                <h6>{mealMatrix[4][1].mealname}</h6>
                <a href="/form2?day=fri&type=lunch">+</a>
              </td>
              <td>
                <h5>
                  Lunch
                  {checkButton(5, 1, "satlunch")}
                </h5>
                <h6>{mealMatrix[5][1].mealname}</h6>
                <a href="/form2?day=sat&type=lunch">+</a>
              </td>
              <td>
                <h5>
                  Lunch
                  {checkButton(6, 1, "sunlunch")}
                </h5>
                <h6>{mealMatrix[6][1].mealname}</h6>
                <a href="/form2?day=sun&type=lunch">+</a>
              </td>
            </tr>

            <tr>
              <td>
                <h5>
                  Dinner
                  {checkButton(0, 2, "mondinnr")}
                </h5>
                <h6>{mealMatrix[0][2].mealname}</h6>
                <a href="/form2?day=mon&type=dinner">+</a>
              </td>
              <td>
                <h5>
                  Dinner
                  {checkButton(1, 2, "tuedinnr")}
                </h5>
                <h6>{mealMatrix[1][2].mealname}</h6>
                <a href="/form2?day=tue&type=dinner">+</a>
              </td>
              <td>
                <h5>
                  Dinner
                  {checkButton(2, 2, "weddinnr")}
                </h5>
                <h6>{mealMatrix[2][2].mealname}</h6>
                <a href="/form2?day=wed&type=dinner">+</a>
              </td>
              <td>
                <h5>
                  Dinner
                  {checkButton(3, 2, "thudinnr")}
                </h5>
                <h6>{mealMatrix[3][2].mealname}</h6>
                <a href="/form2?day=thu&type=dinner">+</a>
              </td>
              <td>
                <h5>
                  Dinner
                  {checkButton(4, 2, "fridinnr")}
                </h5>
                <h6>{mealMatrix[4][2].mealname}</h6>
                <a href="/form2?day=fri&type=dinner">+</a>
              </td>
              <td>
                <h5>
                  Dinner
                  {checkButton(5, 2, "satdinnr")}
                </h5>
                <h6>{mealMatrix[5][2].mealname}</h6>
                <a href="/form2?day=sat&type=dinner">+</a>
              </td>
              <td>
                <h5>
                  Dinner
                  {checkButton(6, 2, "sundinnr")}
                </h5>
                <h6>{mealMatrix[6][2].mealname}</h6>
                <a href="/form2?day=sun&type=dinner">+</a>
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
