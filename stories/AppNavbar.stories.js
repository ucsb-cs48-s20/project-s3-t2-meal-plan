// import Link from "next/link";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";

// function AppNavbar(props) {
//   const user = props.user;

//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Link href="/" passHref={true}>
//           <Navbar.Brand>Meal Planner</Navbar.Brand>
//         </Link>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Nav className="mr-auto">
//             <Link href="/search" passHref={true}>
//               <Nav.Link>Search for Recipes</Nav.Link>
//             </Link>
//             {user && (
//               <Link href="/shoppinglist" passHref={true}>
//                 <Nav.Link>Shopping List</Nav.Link>
//               </Link>
//             )}
//           </Nav>
//           <Nav>
//             {user ? (
//               <NavDropdown
//                 title={
//                   <>
//                     Hi, {user.name}
//                     <Image
//                       className="ml-2"
//                       src={user.picture}
//                       width={24}
//                       height={24}
//                     />
//                   </>
//                 }
//               >
//                 <NavDropdown.Item className="text-danger" href="/api/logout">
//                   Logout
//                 </NavDropdown.Item>
//               </NavDropdown>
//             ) : (
//               <Button data-cy="login" href="/api/login">
//                 Login
//               </Button>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;

import React from "react";
import { select, text } from "@storybook/addon-knobs";
import AppNavbar from "../components/AppNavbar";

export default {
  title: "AppNavbar",
  componenet: AppNavbar,
};

export const loggedOut = () => {
  return <AppNavbar />;
};

export const loggedIn = () => {
  const name = text("Name", "ChanChan Mao");
  // const role =
  const picture = text(
    "Image URL",
    "https://avatars3.githubusercontent.com/u/1119017"
  );
  const user = { name, picture };
  return <AppNavbar user={user} />;
};
