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
        <i>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </i>
        <span className="sr-only">Link to Sabrina Zancotti's Linkedin</span>
      </a>

      <a href="https://github.com/zancotti" target="_blank">
        <i>
          <FontAwesomeIcon icon={faGithub} />
        </i>
        <span className="sr-only">Link to Sabrina Zancotti's GitHub</span>
      </a>
      <a
        href="https://stackoverflow.com/users/16651035/sabrina-zancotti"
        target="_blank"
      >
        <i>
          <FontAwesomeIcon icon={faStackOverflow} />
        </i>
        <span className="sr-only">
          Link to Sabrina Zancotti's Stack Overflow
        </span>
      </a>
    </div>
  );
};
