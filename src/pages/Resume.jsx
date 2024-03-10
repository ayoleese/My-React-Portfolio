import React from 'react';
import { BsFiletypeDoc } from "react-icons/bs";

export default function Resume() {
    return (
        <div style={{ marginLeft: "50px"}}>
            <h1>Resume</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: "18px" }}>Download Resume</span>
                <a href="/MockResume.pages" download style={{ color: "#FF101F", marginLeft: "10px" }}>
                    <BsFiletypeDoc size={28} /> {/* Set the size of the icon */}
                </a> 
            </div>
            <br></br>
            <h2>Front-end Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>Responsive Design</li>
            </ul>
            <h2>Back-end Skills</h2>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>RESTful APIs</li>
                <li>SQL (MySQL, Postman)</li>
                <li>NoSQL (MongoDB)</li>
                <li>Server Management (Render, Heroku, Netlify)</li>
            </ul>
        </div>
    );
}
