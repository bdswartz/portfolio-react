import React from 'react';
import Nav from '../../components/Nav'
import www from '../../assets/images/world-wide-web-white.png';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Header({currentPage, setCurrentPage}) {
//   const { currentCategory } = props;
  return (
    <header id="nav-header">
        <nav className='nav-wrapper'>
        <div>
        <a className="brand-logo"><h5 className="nav-name" onClick={() => {
                    setCurrentPage('aboutme');
                    console.log(currentPage)
                    }}>Brian Swartz</h5></a>
    <Nav  
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
      ></Nav>
      </div>
      </nav>
      </header>
  );
}
export default Header;