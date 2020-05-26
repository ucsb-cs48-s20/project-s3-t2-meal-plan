import React from "react";
import { select, text } from "@storybook/addon-knobs";
import Top from "../components/Top";

export default {
  title: "Top",
  component: Top,
};

export const loggedOut = () => {
  return <Top />;
};

export const loggedIn = () => {
  const name = text("Name", "Phill Conrad");
  const picture = text(
    "Image URL",
    "https://avatars3.githubusercontent.com/u/1119017"
  );
  const user = { name, picture };
  return <Top user={user} />;
};
