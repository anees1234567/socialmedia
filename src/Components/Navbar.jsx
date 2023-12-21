import { AppBar, Toolbar, Typography, styled,InputBase,Badge } from '@mui/material';
import React from 'react';
import {Mail, Notifications, Pets} from '@mui/icons-material';
import * as Mui from '@mui/material'
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

const Icons = styled('Box')(({theme})=>({
  
    display:"flex",
    gap:"20px",
    alignItems:"center"

}));

function Navbar() {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>Navbar</Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search placeholder='Search Here'/>
        <Icons>

        

          <Badge badgeContent={4} color="error">
          <Mail color="white" />
          </Badge>

          <Badge badgeContent={4} color="error">
          <Notifications color="white" />
          </Badge>
            <Mui.Avatar alt="Remy Sharp" src='/assets/person/1.jpeg' />

        </Icons>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
