import React from "react";
import { select, text } from "@storybook/addon-knobs";
import EnterMeal from "../components/EnterMeal";
import AppNavbar from "../components/AppNavbar";

export default {
  title: "EnterMeal",
  component: EnterMeal,
};

export const loggedOut = (props) => {
  console.log(props.user);
  return <AppNavbar />;
  // this ^ is not right. this line is supposed to be
  // return <EnterMeal />;
  // but it's having an issue with "nickname" in EnterMeal.js
};

export const loggedIn = () => {
  const name = text("Name", "Phill Conrad");
  const picture = text(
    "Image URL",
    "https://avatars3.githubusercontent.com/u/1119017"
  );
  const user = { name, picture };
  return <EnterMeal user={user} />;
};
