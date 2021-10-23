import React from "react";
import "./Main.css";
import { Header } from "components/Header/Header";
import { Intro } from "components/Intro/Intro";
import { Tech } from "components/Tech/Tech";
import { Projects } from "components/Projects/Projects";
import { Thoughts } from "components/Thoughts/Thoughts";
import { Skills } from "components/Skills/Skills";
import { ForMore } from "components/ForMore/ForMore";
import { Footer } from "components/Footer/Footer";

export const Main = () => {
  return (
    <>
      <Header />
      <Intro />
      <Tech />
      <Projects />
      <Thoughts />
      <Skills />
      <ForMore />
      <Footer />
    </>
  );
};
