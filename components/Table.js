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

  function checkDeleteButton(dayy, typee, dayString) {
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

  function checkAddButton(dayy, typee, stringLink) {
    if (!mealMatrix[dayy][typee]) {
      return (
        <a href={stringLink}>
          <style jsx>
            {`
              a {
                font-size: 20px;
                color: black;
                padding: 2px;
              }
            `}
          </style>
          +
        </a>
      );
    }
  }

  function dayBox(dayy, typee, dayString) {
    // Find the type of meal to output at top of box
    let typeName = "Breakfast";
    if (typee == 1) {
      typeName = "Lunch";
    } else {
      if (typee == 2) {
        typeName = "Dinner";
      }
    }
    // Form string for href
    let stringLink =
      "/form2?day=" + dayString.slice(0, 3) + "&type=" + dayString.slice(3, 9);
    // Return html
    return (
      <div>
        <style jsx>
          {`
            h5 {
              text-decoration: underline;
              color: #151b54;
            }
            h6 {
              font-size: 20px;
              color: #4863a0;
            }
          `}
        </style>
        <h5>
          {typeName}
          {checkDeleteButton(dayy, typee, "thubreak")}
        </h5>
        <h6>{mealMatrix[dayy][typee].mealname}</h6>
        {checkAddButton(dayy, typee, stringLink)}
      </div>
    );
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
              <td>{dayBox(0, 0, "monbreak")}</td>
              <td>{dayBox(1, 0, "tuebreak")}</td>
              <td>{dayBox(2, 0, "wedbreak")}</td>
              <td>{dayBox(3, 0, "thubreak")}</td>
              <td>{dayBox(4, 0, "fribreak")}</td>
              <td>{dayBox(5, 0, "satbreak")}</td>
              <td>{dayBox(6, 0, "sunbreak")}</td>
            </tr>

            <tr>
              <td>{dayBox(0, 1, "monlunch")}</td>
              <td>{dayBox(1, 1, "tuelunch")}</td>
              <td>{dayBox(2, 1, "wedlunch")}</td>
              <td>{dayBox(3, 1, "thulunch")}</td>
              <td>{dayBox(4, 1, "frilunch")}</td>
              <td>{dayBox(5, 1, "satlunch")}</td>
              <td>{dayBox(6, 1, "sunlunch")}</td>
            </tr>

            <tr>
              <td>{dayBox(0, 2, "mondinnr")}</td>
              <td>{dayBox(1, 2, "tuedinnr")}</td>
              <td>{dayBox(2, 2, "weddinnr")}</td>
              <td>{dayBox(3, 2, "thudinnr")}</td>
              <td>{dayBox(4, 2, "fridinnr")}</td>
              <td>{dayBox(5, 2, "satdinnr")}</td>
              <td>{dayBox(6, 2, "sundinnr")}</td>
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
