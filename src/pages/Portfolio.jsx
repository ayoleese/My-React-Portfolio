import React from 'react';
import '../styles/Portfolio.css'; // Import a CSS file
import OurSpaceProject from '../images/OurSpaceProject.png';
import Project1 from '../images/Project1.png';
import GithubLogo from '../images/GithubLogo.png';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="card-container">
        <div className="card-port">
          <a href="https://jeffch19.github.io/Find-a-movie/">
            <img src={Project1} alt="Project 1" />
            <div className="card-title">Project 1</div>
          </a>
        </div>
        <div className="card-port">
          <a href="https://our--space-1c334f1f25f8.herokuapp.com/">
            <img src={OurSpaceProject} alt="Project 2" />
            <div className="card-title">Project 2</div>
          </a>
        </div>
        <div className="card-port">
          <a href="https://github.com/ayoleese/social_network_api">
            <img src={GithubLogo} alt="Social Api Repo" />
            <div className="card-title">Social Api Repo</div>
          </a>
        </div>
        <div className="card-port">
          <a href="https://text-editor-acvk.onrender.com">
            <img src={GithubLogo} alt="Text Editor" />
            <div className="card-title">Text Editor Repo</div>
          </a>
        </div>
      </div>
    </div>
  );
}

