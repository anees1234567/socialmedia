import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import React from 'react';
import Pets from '@mui/icons-material/Pets';
import * as Mui from '@mui/material'
const StyledToolbar = styled(Mui.Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  color:'white',
  background:"palette.background.default"
});


const Search = styled('div')(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
}));

const Icons = styled('Box')(({theme})=>({
  backgroundColor:"white"
}));

function Navbar() {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography sx={{display:{xs:'none',sm:'block'}}}>Navbar</Typography>
        <Pets sx={{display:{xs:'block',sm:'none'}}}/>
        <Search>search</Search>
        <Icons>icons</Icons>

        
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
