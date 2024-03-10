import React from 'react';
import { BsFiletypeDoc } from "react-icons/bs";

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <div style={{ padding: "30px 0", marginLeft: "50px" }}>
                <span style={{ fontSize: "18px" }}>Download Resume</span>
                <a href="/MockResume.pages" download style={{ color: "#FF101F", marginLeft: "10px" }}>
                    <BsFiletypeDoc size={28} /> {/* Set the size of the icon */}
                </a> 
                <br></br>
                <div style={{ padding: "10px 0" }}>
                    <h2 style={{ margin: "25px 0 0", fontWeight: "bold", color: "#FF101F" }}>Front-end Skills</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Bootstrap</li>
                        <li>Responsive Design</li>
                    </ul>
                    <h2 style={{ margin: "25px 0 0", fontWeight: "bold", color: "#FF101F" }}>Back-end Skills</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>RESTful APIs</li>
                        <li>SQL (MySQL, Postman)</li>
                        <li>NoSQL (MongoDB)</li>
                        <li>Server Management (Render, Heroku, Netlify)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
