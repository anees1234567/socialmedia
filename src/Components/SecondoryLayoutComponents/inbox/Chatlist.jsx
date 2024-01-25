import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Chatlist() {

  const navigate=useNavigate();


  const navigateTo=(path)=>{
    navigate(path);
  }

  const chatList = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
    { id: 6, name: 'Frank' },
    { id: 7, name: 'Grace' },
    { id: 8, name: 'Henry' },
    { id: 9, name: 'Ivy' },
    { id: 10, name: 'Jack' },
    { id: 11, name: 'Katie' },
    { id: 12, name: 'Leo' },
    { id: 13, name: 'Mia' },
    { id: 14, name: 'Nathan' },
    { id: 15, name: 'Olivia' },
  ]
  return (
    <Box   flex="3" sx={{display:{xs:'none',sm:'block'}, overflowY: 'scroll',
    // Adjust scrollbar width using a CSS rule within sx
    '&::-webkit-scrollbar': {
      width: '5px',
    }}}>
       {chatList.map((item) => (
        <ListItem key={item.id} disablePadding onClick={()=>navigateTo(item.path)} position={'sticky'}>
          <ListItemButton>
            <ListItemIcon>
             {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </Box>
  )
}

export default Chatlist