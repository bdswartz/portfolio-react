import React from 'react';
import scout from '../../assets/images/scout-job-ss.jpg'
import github from '../../assets/images/github-white-on-transparent.png'
import { capitalizeFirstLetter } from '../../utils/helpers';

function ProjectCard() {
//   const { currentCategory } = props;
  return (
    <div className="card-container col s12 m6 l4">
    <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img 
          className="activator portfolio-image"
          src={scout}
          alt="Scout Pet Service Screen Shot"/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">Scout Pet Service<i className="material-icons right">more_vert</i></span>
          <p>Full Stack express web server application with MVC architecture that utilizes Handlebars html templating package.</p><br/>
          <p><span className="role-title">Role:</span><span>Back-End Server, API Endpoints, Data Algorithms</span></p>
        </div>
        <div className="card-reveal">
          <div className="reveal-flex">
          <div>
          <span className="card-title">Scout Pet Service<i className="material-icons right">close</i></span>
          <p class="tech">Tools and Techniques</p>
          <p>Node.JS</p>
          <p>Express.JS</p>
          <p>mySQL</p>
          <p>APIs</p> 
          <p>Sequelize</p>
          <p>Handlebars</p>
          <p>MVC Architecture</p>
          </div>
          <div className="project-links">
            <a
            href="https://scout-pet-service.herokuapp.com/" 
            target="_blank" 
            id="demo-button" 
            class="waves-effect waves-light btn">Demo</a>
            <a
            href="https://github.com/bdswartz/pet-care-marketplace" 
            target="_blank"
            id="demo-button" 
            className="waves-effect waves-light btn">
                <img
                className="github-link" 
                src={github}
                alt="Goto GitHub Repo"/>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default ProjectCard;
