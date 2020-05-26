import React from "react";
import { select, text } from "@storybook/addon-knobs";
import EnterMeal from "../components/EnterMeal";

export default {
  title: "EnterMeal",
  component: EnterMeal,
};

export const loggedOut = () => {
  return <EnterMeal />;
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
