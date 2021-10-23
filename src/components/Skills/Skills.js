import React from "react";
import "./Skills.css";

export const Skills = () => {
  const codes = ["HTML5", "CSS3", "JavaScript ES6", "React"];
  const toolbox = ["Visual Studio Code", "GitHub", "Figma", "Slack"];
  const more = [
    "CEO experience",
    "Entrepreneur",
    "Jur. kand.",
    "Branding",
    "Marketing",
    "Business Strategy",
  ];
  const upcoming = ["Redux", "Node", "Styled Components"];

  return (
    <section className="skills">
      <h2>SKILLS</h2>
      <div class="skills__content">
        <div>
          <p class="skills__content__header">Code</p>
          {codes.map((code) => {
            return <p>{code}</p>;
          })}
        </div>

        <div>
          <p class="skills__content__header">Toolbox</p>
          {toolbox.map((tool) => {
            return <p>{tool}</p>;
          })}
        </div>

        <div class="show-more">
          <p class="skills__content__header">more</p>
          {more.map((quality) => {
            return <p>{quality}</p>;
          })}
        </div>

        <div>
          <p class="skills__content__header">UPCOMING</p>
          {upcoming.map((skill) => {
            return <p>{skill}</p>;
          })}
        </div>
      </div>
    </section>
  );
};
