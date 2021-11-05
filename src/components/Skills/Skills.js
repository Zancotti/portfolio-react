import React from "react";
import "./Skills.css";

export const Skills = () => {
  const codes = [
    "HTML5",
    "CSS3",
    "JavaScript ES6",
    "React",
    "Styled Components",
  ];
  const toolbox = ["Visual Studio Code", "GitHub", "Figma", "Slack"];
  const more = [
    "CEO experience",
    "Entrepreneur",
    "Jur. kand.",
    "Branding",
    "Marketing",
    "Business Strategy",
  ];
  const upcoming = ["Redux", "Node"];

  return (
    <section className="skills">
      <h2>SKILLS</h2>
      <div className="skills__content">
        <div>
          <p className="skills__content__header">Code</p>
          {codes.map((code) => {
            return <p key={code}>{code}</p>;
          })}
        </div>

        <div>
          <p className="skills__content__header">Toolbox</p>
          {toolbox.map((tool) => {
            return <p key={tool}>{tool}</p>;
          })}
        </div>

        <div className="show-more">
          <p className="skills__content__header">more</p>
          {more.map((quality) => {
            return <p key={quality}>{quality}</p>;
          })}
        </div>

        <div>
          <p className="skills__content__header">UPCOMING</p>
          {upcoming.map((skill) => {
            return <p key={skill}>{skill}</p>;
          })}
        </div>
      </div>
    </section>
  );
};
