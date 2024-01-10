import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {Mail,Feed, Settings, Home, AccountCircle, Person, Group} from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router';

function Sidebar() {

  const navigate=useNavigate();


  const navigateTo=(path)=>{
    navigate(path);
  }

  const options = [
    { text: "Home", icon: <Home />, path: '/' },
    { text: "Inbox", icon: <Mail />, path: '/inbox' },
    { text: "Feeds", icon: <Feed />, path: '/feeds' },
    { text: "Friends", icon: <Person />, path: 'friends' },
    { text: "Groups", icon: <Group />, path: '/groups' },
    { text: "Settings", icon: <Settings />, path: '/settings' },
    { text: "Profile", icon: <AccountCircle />, path: '/profile' },
  ];

  
  return (
    <Box sx={{display:{xs:'none',sm:'block'},height:'100%'}} flex={2} p={1} >
      {options.map((item) => (
        <ListItem key={item.text} disablePadding onClick={()=>navigateTo(item.path)} position={'sticky'}>
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
