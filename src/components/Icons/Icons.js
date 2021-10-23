import React from "react";
import "./Icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";

export const Icons = () => {
  return (
    <div className="header__icons round-icons">
      <a
        href="https://www.linkedin.com/in/sabrina-zancotti-1848256b/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
        <span className="sr-only">Link to Sabrina Zancotti's Linkedin</span>
      </a>

      <a href="https://github.com/zancotti" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="icon" />
        <span className="sr-only">Link to Sabrina Zancotti's GitHub</span>
      </a>
      <a
        href="https://stackoverflow.com/users/16651035/sabrina-zancotti"
        target="_blank"
      >
        <FontAwesomeIcon icon={faStackOverflow} className="icon" />
        <span className="sr-only">
          Link to Sabrina Zancotti's Stack Overflow
        </span>
      </a>
    </div>
  );
};
