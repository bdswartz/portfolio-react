import React from 'react';
import resume from '../../assets/swartz-resume.pdf'
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({currentPage, setCurrentPage}) {
  return (
  <div>
  <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  <ul className="right hide-on-med-and-down" id="nav-items">
        <li><a><span style = {{color: currentPage === 'aboutme'? 'rgb(200, 227, 249)':'rgb(150,175,199)'}} className="nav-item" onClick={() => {
                  setCurrentPage('aboutme');
                  console.log(currentPage)
                }}>About Me</span></a></li>
        <li><a><span style = {{color: currentPage === 'portfolio'?'rgb(200, 227, 249)':'rgb(150,175,199)'}} className="nav-item" onClick={() => {
                  setCurrentPage('portfolio');
                  console.log(currentPage)
                }}>Portfolio</span></a></li>
        <li><a><span style = {{color: currentPage === 'contact'? 'rgb(200, 227, 249)':'rgb(150,175,199)'}} className="nav-item" onClick={() => {
                  setCurrentPage('contact');
                  console.log(currentPage)
                }}>Contact</span></a></li>
        <li><a><span style = {{color: currentPage === 'resume'? 'rgb(200, 227, 249)':'rgb(150,175,199)'}} className="nav-item" onClick={() => {
                  setCurrentPage('resume');
                  console.log(currentPage)
                }}>Resume</span></a></li>
                </ul>
      <ul className="sidenav" id="mobile-nav">
        <li><a href="#about-me"><span className="sidenav-item">About Me</span></a></li>
        <li><a href="#portfolio-gallery"><span className="sidenav-item">Portfolio</span></a></li>
        <li><a href="#contact-info-section" ><span className="sidenav-item">Contact</span></a></li>
        <li><a href="./assets/swartz-resume.pdf" target="_blank"><span className="sidenav-item">Resume</span></a></li>
      </ul>
  </div>
  );
}
export default Nav;