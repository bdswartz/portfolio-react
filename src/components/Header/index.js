import React from 'react';
import Nav from '../../components/Nav'
import Box from '@mui/material/Box'

function Header({currentPage, setCurrentPage}) {

  return (
    <Box className="nav-header" sx = {{backgroundImage:`url(${currentPage.background})`}}>
        <nav className='nav-wrapper no-shadow'>
        <div>
        <h5 className="nav-name brand-logo" >Brian Swartz</h5>
    <Nav  
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
      ></Nav>
      </div>
      </nav>
      </Box>
  );
}
export default Header;