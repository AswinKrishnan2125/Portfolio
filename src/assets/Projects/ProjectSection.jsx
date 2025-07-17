import React from 'react';
import './ProjectSection.css';

const projects = [
  {
    title: "Netflix Clone",
    description: "A responsive movie streaming web app inspired by Netflix UI. Built using React, TMDB API, and Firebase.",
    link: "https://aswinkrishnan2125.github.io/Netflix_clone/",
  },
  {
    title: "School Website",
    description: "A modern and informative school website built to showcase a school's academic programs, faculty, announcements, and student resources.",
    link: "https://school-site-phi.vercel.app/",
  },
  {
    title: "Weather Dashboard",
    description: "A weather app built with React and OpenWeather API.",
    link: "https://weather-app-three-pi-18.vercel.app/",
  },
  {
    title: "HRMS Dashboard",
    description: "A complete Human Resource Management System (HRMS) developed using React and Firebase.",
    link: "https://hrms-team1.vercel.app/",
  },
  // Add more projects as needed
];

const ProjectSection = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-link">🔗 View Live</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
