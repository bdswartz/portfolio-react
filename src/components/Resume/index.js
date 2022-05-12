import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Resume() {
  return (
    <section className="dark-to-light-section">
        <div className="container">
            <div className="collapsible-header">My Experience...</div>
                      <ul className="tech-list-group2">
                        <li>Project Management</li>
                        <li>Process Engineering</li>
                        <li>Capital Management</li>
                        <li>Cause Analysis</li>
                        <li>Employee Training</li>
                        <li>Talent Development</li>
                      </ul>
                <li className="active">
                    <div className="collapsible-header">My Tech Skills...</div>
                      <h5 className="tech-title">Back-End Stack</h5>
                      <ul className="tech-list-group3">
                        <li>JavaScript/ES6</li>
                        <li>Node.JS</li>
                        <li>Express.JS</li>
                        <li>mySQL</li>  
                        <li>MongoDB</li>
                        <li>Server-Side APIs</li>
                        <li>Express-Sessions</li>
                        <li>Sequelize ORM</li>
                        <li>Mongoose ODM</li>
                        <li>Handlebars</li>
                        <li>bcrypt</li>
                        <li>Heroku</li>
                        <li>MVC Architecture</li>
                      </ul>
                      <div className="divider"></div>
                      <h5 className="tech-title">Front-End Stack</h5>
                      <ul className="tech-list-group3">
                        <li>JavaScript/ES6</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>DOM Document API</li>  
                        <li>Third Party APIs</li>
                        <li>moment.js</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>Materialize</li>
                      </ul>
                      <div className="divider"></div>
                      <h5 className="tech-title">Version Control</h5>
                      <ul className="tech-list-group3">
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>GitLab</li>
                      </ul>
                </li>
        </div>
    </section>
  );
}
export default Resume;
