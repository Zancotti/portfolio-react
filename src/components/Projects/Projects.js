import React from "react";
import "./Projects.css";
import { useMediaQuery } from "react-responsive";

export const Projects = () => {
  const projects = [
    {
      name: "Murder Mystery",
      img: "./pictures/police.jpg",
      header: "Fullstack app with React",
      description:
        "A game developed with React Redux, backend in Node.js and MongoDB",
      liveLink: "https://murdermystery.netlify.app/",
      gitHubLink: "https://github.com/Zancotti/murdermystery",
      languages: [
        "HTML5",
        "CSS3",
        "JavaScript ES6",
        "React",
        "Redux",
        "Node",
        "MongoDB",
        "Moongose",
        "styled-components",
      ],
      alt: "Screenshot of the application",
    },
    {
      name: "Todo App",
      img: "./pictures/todoApp.png",
      header: "React Redux Todo App",
      description:
        "Todo app developed with React Redux and using styled-components.",
      liveLink: "https://zancotti-todoapp.netlify.app/",
      gitHubLink: "https://github.com/Zancotti/project-todos",
      languages: [
        "HTML5",
        "CSS3",
        "JavaScript ES6",
        "React",
        "Redux",
        "styled-components",
      ],
      alt: "Screenshot of the application",
    },
    {
      name: "Oscars API",
      img: "./pictures/oscars.jpg",
      header: "React frontend & Node backend",
      description:
        "A node backend API for the Oscars and an example frontend for it.",
      liveLink: "https://zancotti-oscars.netlify.app/",
      gitHubLink: "https://github.com/Zancotti/project-express-api",
      languages: [
        "Node",
        "API",
        "HTML5",
        "CSS3",
        "JavaScript ES6",
        "React",
        "styled-components",
      ],
      alt: "An Oscars statuette covered with smoke",
    },
    {
      name: "The Labyrinth",
      img: "./pictures/labyrinth.jpg",
      header: "React Redux labyrinth game",
      description:
        "Labyrinth game developed with React Redux and using styled-components.",
      liveLink: "https://zancotti-santos-the-labyrinth.netlify.app/",
      gitHubLink: "https://github.com/Zancotti/project-labyrinth",
      languages: [
        "HTML5",
        "CSS3",
        "JavaScript ES6",
        "React",
        "Redux",
        "styled-components",
        "API",
      ],
      alt: "Screenshot of the application",
    },
    {
      name: "Booking form",
      img: "./pictures/flight.jpg",
      header: "React booking form",
      description: "Booking form for a fictive travel agency built in React.",
      liveLink: "https://zancotti-travels.netlify.app/",
      gitHubLink: "https://github.com/Zancotti/project-survey",
      languages: ["HTML5", "CSS3", "JavaScript ES6", "React"],
      alt: "A plane taking off",
    },
    {
      name: "Music releases",
      img: "./pictures/concert.jpg",
      header: "React music releases",
      description: "Website built with React and using a mock of Spotifys API.",
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
      name: "Project movie",
      img: "./pictures/movie.jpeg",
      header: "Project movie",
      description:
        "Website developed with React using React Router and styled components and information from an API.",
      liveLink: "https://mejstedtzancottimovieapp.netlify.app/",
      gitHubLink: "https://github.com/Zancotti/project-movies",
      languages: ["HTML5", "Styled components", "JavaScript ES6", "React"],
      alt: "Movie theatre",
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
        <div className="projects-wrapper">
          {projects.slice(0, projectsToShow()).map((project) => {
            return (
              <article key={project.name}>
                <div className="projects__picture">
                  <div className="projects__picture-overlay">
                    <span>{project.name}</span>
                  </div>
                  <img src={project.img} alt={project.alt} />
                </div>
                <h3>{project.header}</h3>
                <p>{project.description}</p>
                <div className="projects__link-container">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="projects__link">View it live</div>
                  </a>
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="projects__link">View GitHub</div>
                  </a>
                </div>
                <div className="projects__languages">
                  {project.languages.map((language) => {
                    return <span key={language}>{language}</span>;
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="projects">
        <h4>OTHER PROJECTS</h4>

        {projects.slice(projectsToShow()).map((project) => {
          return (
            <article key={project.name}>
              <h3>{project.header}</h3>
              <p>{project.description} </p>
              <div className="projects__link-container">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="projects__link">View it live</div>
                </a>
                <a
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="projects__link">View GitHub</div>
                </a>
              </div>
              <div className="projects__languages">
                {project.languages.map((language) => {
                  return <span key={language}>{language}</span>;
                })}
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};
