import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Box } from '@mui/system';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function Footer() {
//   const { currentCategory } = props;

const footerIconStyle = {
  fontSize: 50,
  color: 'rgb(200, 227, 249)',
  margin: '0 10px'
  };

  return (
  <Box sx={{ display: 'flex', flexDirection: 'column'}}>
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
    <a href="https://github.com/bdswartz" target="_blank">
    <GitHubIcon sx={footerIconStyle}/>
    </a>
    <a href="https://www.linkedin.com/in/brian-d-swartz/" target="_blank">
      <LinkedInIcon sx={footerIconStyle}/>
      </a>
    <a href="mailto: briandswartz@outlook.com" target="_blank">
      <EmailIcon sx={footerIconStyle}/>
      </a>
    <a href="tel:+5158686601">
      <PhoneIphoneIcon sx={footerIconStyle}/>
      </a>
      </Box>
      <Box sx={{alignSelf:'end', mt: '15px'}}> <h4>Designed by Brian Swartz<br/>Created with React and Material UI</h4></Box>
  </Box>
    
  );
}
export default Footer;