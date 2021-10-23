import React from "react";
import "./ForMore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";

export const ForMore = () => {
  return (
    <section className="more">
      <h2>FOR MORE</h2>

      <div className="round-icons more__icons">
        <a href="www.linkedin.com/in/sabrinazancotti" target="_blank">
          <i>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </i>
          <span className="sr-only">Link to Sabrina Zancotti's Linkedin</span>
          <p>Linkedin</p>
        </a>

        <a
          href="https://github.com/zancotti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <FontAwesomeIcon icon={faGithub} />
          </i>
          <span className="sr-only">Link to Sabrina Zancotti's GitHub</span>
          <p>GitHub</p>
        </a>
        <a
          href="https://stackoverflow.com/users/16651035/sabrina-zancotti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <FontAwesomeIcon icon={faStackOverflow} />
          </i>
          <span className="sr-only">
            Link to Sabrina Zancotti's Stack Overflow
          </span>
          <p>Stack Overflow</p>
        </a>
      </div>
    </section>
  );
};
