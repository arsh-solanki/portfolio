
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['JavaScript','React','Node.js','Express.js','MongoDB', 'Python', 'Java', 'ASP.NET','PHP','SQL'];

  return (
    <section className="skills">
      <h2>My Tech Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
