import { Box ,Toolbar,styled,Avatar, Typography} from '@mui/material'
import React from 'react'


function Chatbox() {

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    color:'white',
   
  });

  const User= styled('div')(({theme})=>({
  
    display:"flex",
    gap:"15px",
    alignItems:"center",
    
  }));
  return (
    <Box flex="8" sx={{ backgroundColor: 'whitesmoke',position:'relative' }} flexDirection={'column'}>
          <div  style={{backgroundColor:'#c298ed'}}>
            <StyledToolbar sx={{flexDirection:'row'}}>
            <User>
                  <Avatar  alt="Remy Sharp" src='/assets/person/1.jpeg' />
                  <Typography  sx={{color:'black'}}  >Alice David</Typography>
        </User>
            </StyledToolbar>
          </div>



          <div style={{ backgroundColor: '#c298ed', position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
        <StyledToolbar sx={{ flexDirection: 'row' }}>
            <User>
                <Avatar alt="Remy Sharp" src='/assets/person/1.jpeg' />
                <Typography sx={{ color: 'black' }}>Alice David</Typography>
            </User>
        </StyledToolbar>
    </div>


</Box>

  )
}

export default Chatbox