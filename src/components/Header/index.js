import React from 'react';
import Nav from '../../components/Nav'

function Header({currentPage, setCurrentPage}) {
//   const { currentCategory } = props;
  return (
    <header id="nav-header">
        <nav className='nav-wrapper'>
        <div>
        <h5 className="nav-name brand-logo"  >Brian Swartz</h5>
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