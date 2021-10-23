import React from "react";
import "./Thoughts.css";
import { useMediaQuery } from "react-responsive";

export const Thoughts = () => {
  const thoughts = [
    {
      url: "#",
      img: "./pictures/flight.jpg",
      date: "OKT 2021",
      name: "How to stop being scared: Learning to love code",
      description:
        "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
      alt: "A plane taking off",
    },
    {
      url: "#",
      img: "./pictures/flight.jpg",
      date: "OKT 2021",
      name: "How to stop being scared: Learning to love code",
      description:
        "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
      alt: "A plane taking off",
    },
    {
      url: "#",
      img: "./pictures/flight.jpg",
      date: "OKT 2021",
      name: "How to stop being scared: Learning to love code",
      description:
        "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
      alt: "A plane taking off",
    },
    {
      url: "#",
      img: "./pictures/flight.jpg",
      date: "OKT 2021",
      name: "How to stop being scared: Learning to love code",
      description:
        "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
      alt: "A plane taking off",
    },
  ];

  const isMobile = useMediaQuery({ query: `(max-width: 667px)` });
  const thoughtsToShow = () => {
    if (isMobile) {
      return 1;
    } else {
      return 2;
    }
  };
  return (
    <section className="thoughts">
      <h2>MY THOUGHTS</h2>

      {thoughts.slice(0, thoughtsToShow()).map((thought) => {
        return (
          <>
            <a href={thought.url}>
              <div className="thoughts__thought">
                <img
                  src={thought.img}
                  alt={thought.alt}
                  className="thoughts__image image-1"
                ></img>
                <h5>{thought.date}</h5>
                <h6>{thought.name}</h6>
                <p>{thought.description}</p>
              </div>
            </a>
          </>
        );
      })}

      <h4>More Thoughts</h4>
      {thoughts.slice(thoughtsToShow()).map((thought) => {
        return (
          <>
            <a href={thought.url}>
              <div className="thoughts__more-thoughts-thought">
                <span>{thought.date}</span>. {thought.name}
              </div>
            </a>
          </>
        );
      })}
    </section>
  );
};
