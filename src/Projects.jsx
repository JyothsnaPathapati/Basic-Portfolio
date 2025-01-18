import React from 'react';
import './App.css';

function Projects() {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="holographic-container">
        <div className="holographic-card">
          <h3>Movie Recommender System</h3>
          <p>Built a recommendation system incorporating popularity-based, content-based, and collaborative filtering models.</p>
          <a href="https://github.com/JyothsnaPathapati" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
      <div className="holographic-container">
        <div className="holographic-card">
          <h3>Hand Gesture-Controlled Gaming System</h3>
          <p>Developed a gesture recognition system to play Hill Climb Racing using OpenCV, enhancing game control interaction.</p>
          <a href="https://github.com/JyothsnaPathapati" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
