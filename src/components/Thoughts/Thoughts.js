import React from "react";
import "./Thoughts.css";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronsRight } from "@fortawesome/pro-duotone-svg-icons";

export const Thoughts = () => {
  const thoughts = [
    {
      id: 1,
      url: "https://www.linkedin.com/posts/sabrinazancotti_onmouseenter-and-onmouseleavea-simple-activity-6872124061334482944-rLPv",
      img: "./pictures/simplehover.gif",
      date: "DEC 2021",
      name: "onMouseEnter and onMouseLeave — A simple way to hover in React",
      description:
        "An article describing how to use states to create hover effects in React",
      alt: "A react hover effect",
    },
    // {
    //   id: 2,
    //   url: "#",
    //   img: "./pictures/flight.jpg",
    //   date: "OKT 2021",
    //   name: "How to stop being scared: Learning to love code",
    //   description:
    //     "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
    //   alt: "A plane taking off",
    // },
    // {
    //   id: 3,
    //   url: "#",
    //   img: "./pictures/flight.jpg",
    //   date: "OKT 2021",
    //   name: "How to stop being scared: Learning to love code",
    //   description:
    //     "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
    //   alt: "A plane taking off",
    // },
    // {
    //   id: 4,
    //   url: "#",
    //   img: "./pictures/flight.jpg",
    //   date: "OKT 2021",
    //   name: "How to stop being scared: Learning to love code",
    //   description:
    //     "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
    //   alt: "A plane taking off",
    // },
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
      <h2>Knowledge Sharing</h2>

      <div className="thoughts-wrapper">
        {thoughts.slice(0, thoughtsToShow()).map((thought) => {
          return (
            <a key={thought.id} href={thought.url}>
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
          );
        })}
      </div>
      {/* <h4>More Thoughts</h4> */}
      {thoughts.slice(thoughtsToShow()).map((thought) => {
        return (
          <a key={thought.id} href={thought.url}>
            <div className="thoughts__more-thoughts-thought">
              <span>{thought.date}</span>. {thought.name}{" "}
              <i>
                <FontAwesomeIcon icon={faChevronsRight} />
              </i>
            </div>
          </a>
        );
      })}
    </section>
  );
};
