import { Avatar, Box, Paper, Typography } from '@mui/material'
import '../friendrequest/Friendrequest.css'
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
            <div style={{marginTop:'10px'}}>
            <Box sx={{display:'flex',marginLeft:'15px'}}>
            <Avatar alt="Remy Sharp" src={item.avatar} />
            <Typography sx={{marginLeft:"10px"}}>{item.name}</Typography>
            </Box>
              <div className='requestbuttondiv'>
                    <button className='btn'>confirm</button>
                    <button className='btn2'>cancel</button>
              </div>
     </div> )
     )}




        
    
    
    
    </>
  )
}

export default Friendrequest