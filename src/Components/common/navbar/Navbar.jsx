import { AppBar,  Typography, styled,InputBase,Badge,Menu } from '@mui/material';
import React, { useState } from 'react';
import {Mail, Notifications, Instagram} from '@mui/icons-material';
import * as Mui from '@mui/material'
import { useNavigate } from 'react-router-dom';




const StyledToolbar = styled(Mui.Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  color:'white',
 
});


const Search = styled(InputBase)(({ theme }) => ({
  background: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  color: 'black',
  width: '40%',
}));

const Icons = styled('div')(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap:"20px",
  [theme.breakpoints.up("sm")]: {
    display: 'flex',
  }
  
}));



const User= styled('div')(({theme})=>({
  
  display:"flex",
  gap:"5px",
  alignItems:"center",
  
}));


function Navbar() {
  const [open, setOpen] = useState(false);
      const naviagateto=useNavigate()
      
  //  const viewmessenger=()=>{
  //     naviagateto("/inbox")
  //  }


  return (
    <AppBar position='fixed' sx={{height:'15vh',backgroundColor:'blueviolet'}} >
      <StyledToolbar>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>Connectix</Typography>
        <Instagram sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search placeholder='Search Here'/>
        <Icons >
          <Badge badgeContent={4} color="error">
          <Mail  onClick={()=>{naviagateto("/inbox")}}  color="white" />
          </Badge>
          <Badge badgeContent={4} color="error">
          <Notifications color="white" />
          </Badge>
        </Icons>
       
        <User>
         <Mui.Avatar onClick={e=>{setOpen(true)}}   alt="Remy Sharp" src='/assets/person/1.jpeg' />
        </User>

        <Menu
        id="basic-menu"
        
        open={open}
        onClose={e=>{setOpen(false)}}
        anchorOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
        transformOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Mui.MenuItem onClick={() => {  setOpen(false); }}>Profile</Mui.MenuItem>
        <Mui.MenuItem onClick={() => {  setOpen(false); }}>My account</Mui.MenuItem>
        <Mui.MenuItem onClick={() => {  setOpen(false); }}>LogOut</Mui.MenuItem>
      </Menu>

          
      </StyledToolbar>
      
    </AppBar>
  );
}

export default Navbar;
