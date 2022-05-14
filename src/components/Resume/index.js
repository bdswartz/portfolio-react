import React, {useState, useEffect} from 'react';
import { Box } from '@mui/system';
import resume from '../../assets/swartz-resume.pdf'


function Resume() {
  const [twoColumns,setTwoColumns] = useState(window.innerWidth < 750);

  useEffect(() => {
    window.addEventListener("resize", () => {
        const newSize = window.innerWidth < 750;
        if (newSize !== twoColumns) setTwoColumns(newSize);
    }, false);
  }, [twoColumns]);

  return (
    <section className="dark-to-light-section">
       <h4 className="portfolio-title">Experience and Skills</h4>
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
                <li>
                    <div className="collapsible-header">My Tech Skills...</div>
                      <h5 className="tech-title">Back-End Stack</h5>
                      <ul className={`${twoColumns ? "tech-list-group2" : "tech-list-group3"}`}>
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
                      <ul className={`${twoColumns ? "tech-list-group2" : "tech-list-group3"}`}>
                        <li>JavaScript/ES6</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>DOM Document API</li>  
                        <li>Third Party APIs</li>
                        <li>moment.js</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>Materialize</li>
                        <li>Material UI</li>
                      </ul>
                      <div className="divider"></div>
                      <h5 className="tech-title">Version Control</h5>
                      <ul className="tech-list-group3">
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>GitLab</li>
                      </ul>
                </li>
          <a href= {resume} target="_blank"><Box component='h3' sx={{ fontStyle: 'italic', fontSize: '1.5rem', mt: '5rem', color: 'rgb(9, 13, 62)' }}>Click Here to Download Full Resume</Box></a>
        </div>
    </section>
  );
}
export default Resume;
