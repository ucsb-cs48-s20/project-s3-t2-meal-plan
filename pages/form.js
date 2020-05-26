import Layout from "../components/Layout";
import { requiredAuth } from "../utils/ssr";
import EnterMeal from "../components/EnterMeal";

import Head from "next/head";
import Button from "react-bootstrap/Button";

import React, { Component, useState } from "react";
import fetch from "isomorphic-unfetch";

export const getServerSideProps = requiredAuth;

function form(props) {
  return <div> {EnterMeal(props)} </div>;
}

export default form;
