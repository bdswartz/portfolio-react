import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import TemporaryDrawer from './sidenav';

function Nav({currentPage, setCurrentPage}) {
  return (
  <div>
  <a href="#" data-target="mobile-nav" class="sidenav-trigger"><TemporaryDrawer currentPage = {currentPage}
        setCurrentPage = {setCurrentPage} /></a>
  <ul className="right hide-on-med-and-down" id="nav-items">
        <li><a href="#AboutMe"><span 
          className={currentPage === 'aboutme' ? 'nav-item nav-active' : 'nav-item'}
          onClick={() => {
                  setCurrentPage('aboutme');
                  console.log(currentPage)
                }}>About Me</span></a></li>
        <li><a href="#Portfolio"><span 
          className={currentPage === 'portfolio' ? 'nav-item nav-active' : 'nav-item'}
          onClick={() => {
                  setCurrentPage('portfolio');
                  console.log(currentPage)
                }}>Portfolio</span></a></li>
        <li><a href="#Contact"><span
        className={currentPage === 'contact' ? 'nav-item nav-active' : 'nav-item'}
        onClick={() => {
                  setCurrentPage('contact');
                  console.log(currentPage)
                }}>Contact</span></a></li>
        <li><a href="#Resume"><span 
        className={currentPage === 'resume' ? 'nav-item nav-active' : 'nav-item'} 
        onClick={() => {
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