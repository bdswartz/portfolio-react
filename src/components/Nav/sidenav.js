import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import resume from '../../assets/swartz-resume.pdf'
import beachSunrise from '../../assets/images/beach-sunrise.jpg'
import cityCharlotte from '../../assets/images/charlotte.jpg'
import deskTop from '../../assets/images/desktop.jpg'


export default function TemporaryDrawer({currentPage, setCurrentPage}) {
  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const menuItems = [
    {
      label: 'About Me',
      pageName: 'aboutme',
      backgroundName: beachSunrise
    },
    {
      label: 'Portfolio',
      pageName: 'portfolio',
      backgroundName: cityCharlotte
    },
    {
      label: 'Contact',
      pageName: 'contact',
      backgroundName: deskTop
    },
    // {
    //   label: 'Resume',
    //   pageName: 'resume'
    // }
  ]

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, backgroundColor: 'rgb(200, 227, 249)', height:'100%' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map(({label, pageName, backgroundName}, index) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
            onClick={() => {
                  setCurrentPage({page:pageName, background:backgroundName});
                  console.log(currentPage)
                }}>
              <ListItemText sx={{color: 'rgb(9, 13, 62)'}} primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
          <ListItem disablePadding>
          <a href= {resume} target="_blank">
            <ListItemButton>
              <ListItemText sx={{color: 'rgb(9, 13, 62)'}} primary='Resume' />
            </ListItemButton>
          </a>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className='menuButton' onClick={toggleDrawer(anchor, true)}><i class="material-icons">menu</i></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
