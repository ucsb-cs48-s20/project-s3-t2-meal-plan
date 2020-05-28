import Layout from "../components/Layout";
import { requiredAuth } from "../utils/ssr";
import EnterMeal from "../components/EnterMeal";

import Head from "next/head";
import Button from "react-bootstrap/Button";

import React, { Component, useState } from "react";
import fetch from "isomorphic-unfetch";

export const getServerSideProps = requiredAuth;

function form(props) {
  const user = props.user;
  return (
    <Layout user={user}>
      <Head>
        <title>Enter a Meal</title>
      </Head>
      <div> {EnterMeal(props)} </div>
    </Layout>
  );
}

export default form;
