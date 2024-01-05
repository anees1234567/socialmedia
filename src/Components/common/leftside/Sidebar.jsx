import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {Mail,Feed, AddBox, Settings, Home, AccountCircle, Person, Group} from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router';

function Sidebar() {

  const navigate=useNavigate();


  const navigateTo=(path)=>{
    navigate(path);
  }

  const options = [
    { text: "Home", icon: <Home />, path: '/' },
    { text: "Inbox", icon: <Mail />, path: 'primary/inbox' },
    { text: "Feeds", icon: <Feed />, path: 'primary/feeds' },
    { text: "Create", icon: <AddBox />, path: 'primary/create' },
    { text: "Friends", icon: <Person />, path: 'primary/friends' },
    { text: "Groups", icon: <Group />, path: 'primary/groups' },
    { text: "Settings", icon: <Settings />, path: 'primary/settings' },
    { text: "Profile", icon: <AccountCircle />, path: 'primary/profile' },
  ];

  
  return (
    <Box sx={{display:{xs:'none',sm:'block'},height:'100%'}} flex={4} p={1} >
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
