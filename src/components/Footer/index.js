import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Box } from '@mui/system';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Footer() {
//   const { currentCategory } = props;
  return (
  <Box sx={{ display: 'flex', flexDirection: 'column'}}>
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
    <a href="https://github.com/bdswartz" target="_blank">
    <GitHubIcon sx={{ fontSize: 50 }} className='footer-icon'/>
    </a>
    <a href="https://www.linkedin.com/in/brian-d-swartz/" target="_blank">
      <LinkedInIcon sx={{ fontSize: 50 }} className='footer-icon'/>
      </a>
    <a href="mailto: briandswartz@outlook.com" target="_blank">
      <EmailIcon sx={{ fontSize: 50 }} className='footer-icon'/>
      </a>
    <a href="tel:+5158686601">
      <PhoneIphoneIcon sx={{ fontSize: 50 }} className='footer-icon'/>
      </a>
      </Box>

      <Box sx={{alignSelf:'end', mt: '15px'}}> <h4>Designed and Created by Brian Swartz</h4></Box>
  </Box>
    
  );
}
export default Footer;