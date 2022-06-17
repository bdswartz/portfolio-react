import React from 'react';
import AboutAccordian from '../AboutAccordian';
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
    <AboutAccordian></AboutAccordian>
            {/* <ul className="collapsible expandable">
                <div className="divider"></div>
                <li className="active">
                    <div className="collapsible-header">My Story...</div>
                    <div className="bio-body">Full-Stack Web Developer with a passion for Back-End functionality currently pursuing a Certificate in Full Stack Web Development from the University of North Carolina - Chapel Hill.  Currently working through lessons and projects to become proficient in technologies such as HTML/CSS, JavaScript, Node.JS, MySQL, MongoDB, and React.  With my previous education and work experience I have become skilled at managing engineering projects, troubleshooting processes, and analyzing technical data. My goal is to continue growing my skill with web technologies and leverage the professional skills that I have developed managing projects and engineering real world solutions to complex problems.</div>
                </li>
                <div className="divider"></div>
            </ul> */}
        </div> 
      </div>
    </div>
</section>
  );
}
export default AboutMe;