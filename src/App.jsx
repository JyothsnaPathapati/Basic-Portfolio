import React from 'react';
import './App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', padding: 0 }}>
            <li style={{ margin: '0 10px' }}><a href="#about">About</a></li>
            <li style={{ margin: '0 10px' }}>|</li>
            <li style={{ margin: '0 10px' }}><a href="#projects">Projects</a></li>
            <li style={{ margin: '0 10px' }}>|</li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
