import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function AppNavbar(props) {
  const user = props.user;

  return (
    <Navbar style={{ backgroundColor: "white" }} expand="lg">
      <style jsx>
        {`
          h3 {
            padding: 12px;
            margin-top: -9px;
            margin-bottom: -9px;
            color: #5390e3;
            cursor: pointer;
            background-color: white;
          }
          h3:hover {
            color: white;
            background-color: #90bdfb;
          }
          h5 {
            color: #5390e3;
            font-weight: 400;
            font-size: 17px;
            cursor: pointer;
            margin-top: -18px;
            margin-bottom: -18px;
            padding: 19px;
            background-color: white;
          }
          h5:hover {
            color: white;
            background-color: #90bdfb;
          }
        `}
      </style>
      <Container>
        <Link href="/" passHref={true}>
          {/* <Navbar.Brand>Meal Planner</Navbar.Brand> */}
          <h3>Meal Planner</h3>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            {user && (
              <>
                <Link href="/search" passHref={true}>
                  <h5>Search for Recipes</h5>
                </Link>
                <Link href="/shoppinglist" passHref={true}>
                  <h5>Shopping List</h5>
                </Link>
              </>
            )}
          </Nav>
          <Nav>
            {user ? (
              <NavDropdown
                title={
                  <>
                    Hi, {user.name}
                    <Image
                      className="ml-2"
                      src={user.picture}
                      width={24}
                      height={24}
                    />
                  </>
                }
              >
                <NavDropdown.Item className="text-danger" href="/api/logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button data-cy="login" href="/api/login">
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
