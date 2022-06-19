import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import TemporaryDrawer from './sidenav';
import resume from '../../assets/swartz-resume.pdf'
import beachSunrise from '../../assets/images/beach-sunrise.jpg'
import cityCharlotte from '../../assets/images/charlotte.jpg'
import deskTop from '../../assets/images/desktop.jpg'

function Nav({currentPage, setCurrentPage}) {
  console.log(currentPage)
  return (
  <div>
  <a href="#" data-target="mobile-nav" class="sidenav-trigger"><TemporaryDrawer currentPage = {currentPage}
        setCurrentPage = {setCurrentPage} /></a>
  <ul className="right hide-on-med-and-down" id="nav-items">
        <li><a href="#AboutMe"><span 
          className={currentPage.page === 'aboutme' ? 'nav-item nav-active' : 'nav-item'}
          onClick={() => {
                  setCurrentPage({page:'aboutme', background:beachSunrise});
                }}>About Me</span></a></li>
        <li><a href="#Portfolio"><span 
          className={currentPage.page === 'portfolio' ? 'nav-item nav-active' : 'nav-item'}
          onClick={() => {
                  setCurrentPage({page:'portfolio', background:cityCharlotte});
                }}>Portfolio</span></a></li>
        <li><a href="#Contact"><span
        className={currentPage.page === 'contact' ? 'nav-item nav-active' : 'nav-item'}
        onClick={() => {
                  setCurrentPage({page:'contact', background:deskTop});
                }}>Contact</span></a></li>
                <li><a href= {resume} target="_blank" className='nav-item'>Resume</a></li>
                </ul>
  </div>
  );
}
export default Nav;