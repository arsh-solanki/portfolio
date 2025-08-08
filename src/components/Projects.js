
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Project</h2>
      <div className="project">
        <h3>SocialBridge Service</h3>
        <p>Developed a full-stack mentorship platform, SocialBridge, to connect junior students and recent joiners with senior professionals for skill development, promoting an affordable, transparent, and flexible environment for professional growth. Utilized tech stack: JavaScript, React, Node.js, Express.js, MongoDB.</p>
      </div>
       <div className="project">
        <h3>Portfolio Website</h3>
        <p>A responsive portfolio built using React and Bootstrap.</p>
      </div>
    </section>
  );
};

export default Projects;
