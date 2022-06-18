import React, {useEffect, useRef} from 'react';
import Nav from '../../components/Nav'
import Box from '@mui/material/Box'
import beachSunrise from '../../assets/images/beach-sunrise.jpg'
import cityCharlotte from '../../assets/images/charlotte.jpg'
import deskTop from '../../assets/images/desktop.jpg'

function Header({currentPage, setCurrentPage}) {
//   const { currentCategory } = props;

// let imageLink = useRef();
// useEffect(()=> {
//         switch (currentPage) {
//           case 'aboutme':
//             imageLink.current = beachSunrise
//             break;
//           case 'portfolio':
//             imageLink.current = cityCharlotte
//             break;
//           case 'contact':
//             imageLink.current = deskTop
//             break;
//           }
//         },[currentPage]);

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