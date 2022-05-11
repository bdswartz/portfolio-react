import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function AboutMe() {
//   const { currentCategory } = props;
  return (
    <section className="container dark-to-light-section" id="about-me">
    <div className="row">
    <div className="portrait-holder col m12 l5">
        <div className="portrait">
        </div>
        <h4 className="section-title about-me">About Me</h4>
        <p className="bio-body">Living in Charlotte, North Carolina with my wife and three children, and spending leisure time cooking and as a (very) amateur astronomer.</p>
    </div>
    <div className="bio-holder col m12 l7">
        <div className="skills">
            {/* <h3 className="bio-section"><strong>Skills and Experience</strong></h3> */}
            <ul className="collapsible expandable">
                <div className="divider"></div>
                <li className="active">
                    <div className="collapsible-header">Read My Story...</div>
                    {/* className="collapsible-body" */}
                    <div ><span>Full-Stack Web Developer with a passion for Back-End functionality currently pursuing a Certificate in Full Stack Web Development from the University of North Carolina - Chapel Hill.  Currently working through lessons and projects to become proficient in technologies such as HTML/CSS, JavaScript, Node.JS, MySQL, MongoDB, and React.  With my previous education and work experience I have become skilled at managing engineering projects, troubleshooting processes, and analyzing technical data. My goal is to continue growing my skill with web technologies and leverage the professional skills that I have developed managing projects and engineering real world solutions to complex problems.</span></div>
                </li>
                <div className="divider"></div>
                <li>
                    <div className="collapsible-header">See My Experience...</div>
                    {/* <div className="collapsible-body"> */}
                      <ul className="tech-list-group2">
                        <li>Project Management</li>
                        <li>Process Engineering</li>
                        <li>Capital Management</li>
                        <li>Cause Analysis</li>
                        <li>Employee Training</li>
                        <li>Talent Development</li>
                      </ul>
                </li>
                <div className="divider"></div>
                <li className="active">
                    <div className="collapsible-header">Check Out my Tech Skills...</div>
                    {/* <div className="collapsible-body"> */}
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
                      <h5 className="tech-title">Version Control</h5>
                      <ul className="tech-list-group3">
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>GitLab</li>
                      </ul>
                    {/* </div> */}
                </li>
                <div className="divider"></div>
            </ul>
        </div>
      </div>
    </div>
</section>
  );
}
export default AboutMe;