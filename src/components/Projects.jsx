import React, { useEffect } from "react";
import gsap from "gsap";
import "./Projects.css";

const projects = [
  { id: 1, title: "Portfolio Website", image: "https://s3-alpha.figma.com/hub/file/1455794592/83534402-12ad-483b-9f80-2871da719747-cover.png", link: "..." },
  { id: 2, title: "E-commerce App", image: "https://s3-alpha.figma.com/hub/file/1455794592/83534402-12ad-483b-9f80-2871da719747-cover.png", link: "..." },
  { id: 3, title: "Chat Application", image: "https://s3-alpha.figma.com/hub/file/1455794592/83534402-12ad-483b-9f80-2871da719747-cover.png", link: "..." },
  { id: 4, title: "Blog Platform", image: "https://s3-alpha.figma.com/hub/file/1455794592/83534402-12ad-483b-9f80-2871da719747-cover.png", link: "..." },
  { id: 5, title: "Weather App", image: "https://s3-alpha.figma.com/hub/file/1455794592/83534402-12ad-483b-9f80-2871da719747-cover.png", link: "..." },
  { id: 5, title: "Weather App", image: "https://s3-alpha.figma.com/hub/file/1455794592/83534402-12ad-483b-9f80-2871da719747-cover.png", link: "..." },
];

const Projects = () => {

useEffect(() => {
  gsap.from(".project-card", {
  opacity: 0,
  y: 50,
  scale: 0.95,
  duration: 1,
  stagger: 0.25,
  ease: "power3.out",
  clearProps: "transform",
  scrollTrigger: {
    trigger: "#Projects",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
});
}, []);


  return (
    <section id="Projects" className="projects-section">
      <div className="p-left">
        <span>
          My <span>Projects</span>
        </span>
      </div>

      <div className="projects-slider-wrapper">
        <div className="projects-slider">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">
                {project.id}. {project.title}
              </h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
