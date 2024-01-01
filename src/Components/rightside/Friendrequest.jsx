import { Avatar, Box, Paper, Typography } from '@mui/material'
import React from 'react'

function Friendrequest() {
    const friendRequests = [
        {
          name: "Glen Smith",
          avatar: "/assets/person/1.jpeg",
        },
        {
          name: "Mark Wood",
          avatar: "/assets/person/2.jpeg",
        },
        {
          name: "Emily Davis",
          avatar: "/assets/person/3.jpeg",
        },
        {
          name: "Alex Johnson",
          avatar: "/assets/person/4.jpeg",
        },
        {
          name: "Sophie Miller",
          avatar: "/assets/person/5.jpeg",
        },
      ];
      
  return (
    <>
    <Typography sx={{fontWeight:'bold',marginTop:'10px',marginBottom:'10px'}}>
        Friend Requests
    </Typography>
    
   {friendRequests.map((item)=>(
            <Paper sx={{marginTop:'10px'}}>
            <Box sx={{display:'flex'}}>
            <Avatar alt="Remy Sharp" src={item.avatar} />
            <Typography sx={{marginLeft:"10px"}}>{item.name}</Typography>
            </Box>
     </Paper> )
     )}




        
    
    
    
    </>
  )
}

export default Friendrequest