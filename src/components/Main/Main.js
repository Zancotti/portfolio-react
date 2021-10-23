import React from "react";
import "./Main.css";
import { Header } from "components/Header/Header";
import { Intro } from "components/Intro/Intro";
import { Tech } from "components/Tech/Tech";
import { Projects } from "components/Projects/Projects";

export const Main = () => {
  return (
    <>
      <Header />
      <Intro />
      <Tech />
      <Projects />
    </>
  );
};
