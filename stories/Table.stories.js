import React from "react";
import { select, text } from "@storybook/addon-knobs";
import Table from "../components/Table";

export default {
  title: "Table",
  component: Table,
};

export const loggedOutEmpty = () => {
  return <Table />;
};

export const loggedInDisplaysPlanner = () => {
  const name = text("Name", "Phill Conrad");
  const picture = text(
    "Image URL",
    "https://avatars3.githubusercontent.com/u/1119017"
  );
  const user = { name, picture };
  return <Table user={user} />;
};
