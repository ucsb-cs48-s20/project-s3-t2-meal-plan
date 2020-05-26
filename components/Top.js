import Layout from "../components/Layout";

function Top(props) {
  const user = props.user;
  return (
    <tr>
      <style jsx>
        {`
          td {
            padding-bottom: 20px;
          }
          th {
            text-align: center;
          }
          h3 {
            padding-top: 20px;
            width: 160px;
            color: #151b54;
          }
        `}
      </style>
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
  );
}

export default Top;
