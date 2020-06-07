import Container from "react-bootstrap/Container";
import AppNavbar from "./AppNavbar";

function Layout(props) {
  const user = props.user;

  return (
    <>
      <AppNavbar user={user} />
      <Container variant="success">{props.children}</Container>
    </>
  );
}

export default Layout;
