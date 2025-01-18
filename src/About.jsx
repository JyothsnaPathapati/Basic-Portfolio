import React from 'react';
import './App.css';

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>Hey there! My name is Jyothsna Pathapati, a CSE undergrad at KL University with a passion for full-stack development and cloud technologies.</p>
      <h3>Skills</h3>
      <ul className="skills-animation">
        <li>Programming: C++, Java, Python</li>
        <li>Web Development: HTML/CSS, JavaScript, React JS, Node JS</li>
        <li>Database Management: MySQL, MongoDB</li>
        <li>Version Control: Git, GitHub</li>
        <li>Cloud Technologies: AWS</li>
      </ul>
      <h2>Education</h2>
      <div className="holographic-container">
        <div className="holographic-card">
          <h3>01. KL University</h3>
          <p>B.Tech in CSE</p>
          <p>Grade: 9.4 GPA</p>
        </div>
      </div>
      <div className="holographic-container">
        <div className="holographic-card">
          <h3>02. Star Junior College</h3>
          <p>Intermediate (MPC)</p>
          <p>Grade: 89%</p>
        </div>
      </div>
      <div className="holographic-container">
        <div className="holographic-card">
          <h3>03. Sri Chaitanya High School</h3>
          <p>Schooling</p>
          <p>Grade: 10 GPA</p>
        </div>
      </div>
    </div>
  );
}

export default About;
