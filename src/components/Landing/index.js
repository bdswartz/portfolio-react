import React from 'react';
import { Box } from '@mui/system';
import www from '../../assets/images/world-wide-web-white.png';
import beachSunrise from '../../assets/images/beach-sunrise.jpg'

function Landing({currentPage, setCurrentPage}) {

const landingStyle = {
  alignItems: 'center',
  backgroundImage: `url(${beachSunrise})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  color: 'white',
  display: 'flex',
  fontWeight: 'bold',
  flexWrap: 'wrap',
  height: '100vh',
  justifyContent: 'center',
  textAlign: 'center',
  textShadow: '0 0 10px black'
}
  return (
    <Box sx={landingStyle}>
        <div className="hero-title" href="#" onClick={()=> {
          setCurrentPage({page:'aboutme', background:beachSunrise})
        }}>
            <img className="landing-icon" src={www} alt="World Wide Web Icon"/>
            <h4>Brian Swartz</h4>
            <h5>Full Stack Web Developer</h5>
            <p>Click to enter...</p>
        </div>
    </Box>
  );
}
export default Landing;