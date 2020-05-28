import React from "react";
import { text, object } from "@storybook/addon-knobs";
import Table from "../components/Table";

export default {
  title: "Table",
  component: Table,
};

export const loggedInDisplaysPlanner = () => {
  const name = text("Name", "Phill Conrad");
  const picture = text(
    "Image URL",
    "https://avatars3.githubusercontent.com/u/1119017"
  );
  const label = "Meal Matrix";
  const defaultValue = [
    [{ mealname: "eggs" }, { mealname: "" }, { mealname: "" }],
    [{ mealname: "" }, { mealname: "" }, { mealname: "" }],
    [{ mealname: "" }, { mealname: "sandwich" }, { mealname: "" }],
    [{ mealname: "" }, { mealname: "" }, { mealname: "" }],
    [{ mealname: "" }, { mealname: "pizza" }, { mealname: "" }],
    [{ mealname: "" }, { mealname: "" }, { mealname: "" }],
    [{ mealname: "toast" }, { mealname: "" }, { mealname: "steak" }],
  ];
  const user = { name, picture };
  const value = object(label, defaultValue);
  return <Table user={user} mealMatrix={value} />;
};
