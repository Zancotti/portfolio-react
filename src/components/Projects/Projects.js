import React from "react";
import "./Projects.css";
import { useMediaQuery } from "react-responsive";

export const Projects = () => {
  const projects = [
    {
      name: "Booking form",
      img: "./pictures/flight.jpg",
      header: "Booking form built with React",
      description: "Booking form for a fictive travel agency built in React.",
      liveLink: "https://zancotti-travels.netlify.app/",
      gitHubLink: "https://github.com/Zancotti/project-survey",
      languages: ["HTML5", "CSS3", "JavaScript ES6", "React"],
      alt: "A plane taking off",
    },

    {
      name: "Music releases",
      img: "./pictures/concert.jpg",
      header: "Website built with React and using a mock of Spotifys API",
      description: "Booking form for a fictive travel agency built in React.",
      liveLink: "https://musicapp-sabrina-nina.netlify.app/",
      gitHubLink: "https://github.com/Zancotti/project-music-releases",
      languages: [
        "HTML5",
        "CSS3",
        "JavaScript ES6",
        "React",
        "pair-programming",
        "API:s",
      ],
      alt: "A crowd during a concert",
    },

    {
      name: "Business Site",
      img: "./pictures/escape__house.JPG",
      header: "Responsive Business site",
      description:
        "Responsive web site developed using HTML, CSS and JavaScript with content from my business.",
      liveLink: "https://zancotti-escapehouse.netlify.app",
      gitHubLink: "https://github.com/Zancotti/project-business-site",
      languages: ["HTML5", "CSS3", "JavaScript ES6"],
      alt: "Three boys in a scary house",
    },

    {
      name: "Weather app",
      img: "./pictures/weather.JPG",
      header: "Weather app",
      description:
        "Responsive web site developed with mob-programming using HTML, CSS, JS and API:s for weather forecasts.",
      liveLink: "https://lionweatherapp.netlify.app",
      gitHubLink: "https://github.com/Zancotti/project-weather-app",
      languages: ["HTML5", "CSS3", "JavaScript ES6", "API", "mob-programming"],
      alt: "clouds",
    },

    {
      name: "Guess Who?",
      img: "./pictures/guess__who.JPG",
      header: "LoL guess-who game",
      description:
        "Responsive web site developed using HTML, CSS and JavaScript with content from my business.",
      liveLink: "https://zancotti-lol-guesswho.netlify.app",
      gitHubLink: "https://github.com/Zancotti/project-guess-who",
      languages: ["HTML5", "CSS3", "JavaScript ES6"],
      alt: "Schreenshot of the game",
    },
  ];
  const isMobile = useMediaQuery({ query: `(max-width: 667px)` });
  const projectsToShow = () => {
    if (isMobile) {
      return 2;
    } else {
      return 4;
    }
  };
  return (
    <>
      <section className="projects">
        <h2>FEATURED PROJECTS</h2>

        {projects.slice(0, projectsToShow()).map((project) => {
          return (
            <>
              <article>
                <div className="projects__picture">
                  <div className="projects__picture-overlay">
                    <span>{project.name}</span>
                  </div>
                  <img src={project.img} alt={project.alt} />
                </div>
                <h3>{project.header}</h3>
                <p>{project.description}</p>
                <div className="projects__link-container">
                  <a href={project.liveLink} target="_blank">
                    <div className="projects__link">View it live</div>
                  </a>
                  <a href={project.gitHubLink} target="_blank">
                    <div className="projects__link">View GitHub</div>
                  </a>
                </div>
                <div className="projects__languages">
                  {project.languages.map((language) => {
                    return <span>{language}</span>;
                  })}
                </div>
              </article>
            </>
          );
        })}
      </section>
      <section className="projects">
        <h4>OTHER PROJECTS</h4>

        {projects.slice(projectsToShow()).map((project) => {
          return (
            <>
              <article>
                <h3>{project.header}</h3>
                <p>{project.description}</p>
                <div className="projects__link-container">
                  <a href={project.liveLink} target="_blank">
                    <div className="projects__link">View it live</div>
                  </a>
                  <a href={project.gitHubLink} target="_blank">
                    <div className="projects__link">View GitHub</div>
                  </a>
                </div>
                <div className="projects__languages">
                  {project.languages.map((language) => {
                    return <span>{language}</span>;
                  })}
                </div>
              </article>
            </>
          );
        })}
      </section>
    </>
  );
};
