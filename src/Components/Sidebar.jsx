import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import {Mail,Feed, AddBox, Settings, Home, AccountCircle, Person, Group} from '@mui/icons-material';
import React from 'react';

function Sidebar() {

  const options = [
    { text: "Home", icon: <Home/> },
    { text: "Inbox", icon: <Mail/> },
    { text: "Feeds", icon: <Feed/> }, 
    { text: "Create", icon: <AddBox/>},
    { text: "Friends", icon: <Person/>},
    { text: "Groups", icon: <Group/>},
    { text: "Settings", icon:<Settings/>},
    { text:"Profile",icon:<AccountCircle/>}
  ];

  
  return (
    <Box sx={{display:{xs:'none',sm:'block'}}} flex={4} p={1} >
      {options.map((item) => (
        <ListItem key={item} disablePadding  position={'sticky'}>
          <ListItemButton>
            <ListItemIcon>
             {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </Box>
  );
}

export default Sidebar;
