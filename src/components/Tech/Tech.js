import React from "react";
import "./Tech.css";

export const Tech = () => {
  const techs = [
    {
      name: "JavaScript ES6",
      bold: true,
    },
    {
      name: "HTML",
      bold: false,
    },
    {
      name: "CSS",
      bold: false,
    },
    {
      name: "API:s",
      bold: false,
    },

    {
      name: "Flexbox",
      bold: false,
    },

    {
      name: "Grid",
      bold: false,
    },

    {
      name: "Web Accessibility",
      bold: false,
    },
    {
      name: "pair-programming",
      bold: false,
    },
    {
      name: "mob-programming",
      bold: false,
    },
    {
      name: "GitHub",
      bold: false,
    },
    {
      name: "React",
      bold: true,
    },
    {
      name: "Redux",
      bold: true,
    },
    {
      name: "Node",
      bold: true,
    },

    {
      name: "styled-components",
      bold: false,
    },
  ];
  return (
    <section className="tech">
      <h2>TECH</h2>
      <div className="tech__content">
        {techs.map((tech, i) => {
          const divider = i < techs.length - 1 ? ", " : "";

          return (
            <span
              key={tech.name}
              style={{ fontWeight: tech.bold ? "600" : "400" }}
            >
              {tech.name}
              {divider}
            </span>
          );
        })}
      </div>
    </section>
  );
};
