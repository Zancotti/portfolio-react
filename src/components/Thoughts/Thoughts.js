import React from "react";
import "./Thoughts.css";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronsRight } from "@fortawesome/pro-duotone-svg-icons";

export const Thoughts = () => {
  const thoughts = [
    {
      id: 1,
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6888445269508206592/",
      img: "./pictures/article.jpeg",
      date: "JAN 2022",
      name: "Preparing for your first code test",
      description:
        "An article about what you can do to prepare for that first scary technical code test.",
      alt: "Two women discussing code",
    },
    {
      id: 2,
      url: "https://www.linkedin.com/posts/sabrinazancotti_onmouseenter-and-onmouseleavea-simple-activity-6872124061334482944-rLPv",
      img: "./pictures/simplehover.gif",
      date: "DEC 2021",
      name: "A simple way to hover in React",
      description:
        "An article describing how to use states to create hover effects in React.",
      alt: "A react hover effect",
    },
    {
      id: 3,
      url: "https://www.linkedin.com/posts/sabrinazancotti_ive-spent-5-years-studying-law-and-6-more-activity-6862378770913914880-aHmL",
      img: "./pictures/plant.jpg",
      date: "NOV 2021",
      name: "Embracing change",
      description:
        "This year I took the biggest decision yet in my career - changing from law to software development.",
      alt: "A growing plant",
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
