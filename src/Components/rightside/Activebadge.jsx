import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { AvatarGroup, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
      
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  }
  
}));



function Activebadge() {
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <Typography sx={{fontWeight:'bold', marginTop:'10px'}}>Online</Typography>
            <Stack direction="row" spacing={2} sx={{marginLeft:'20px'}}>
                <AvatarGroup  sx={{cursor:'pointer'}}   total={15}>
                <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar  alt="Remy Sharp" src="/assets/person/1.jpeg" />
              </StyledBadge>
    
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar   alt="Remy Sharp" src="/assets/person/1.jpeg" />
              </StyledBadge>
    
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar   alt="Remy Sharp" src="/assets/person/1.jpeg" />
              </StyledBadge>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar   alt="Remy Sharp" src="/assets/person/1.jpeg" />
              </StyledBadge>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar   alt="Remy Sharp" src="/assets/person/1.jpeg" />
              </StyledBadge>
                </AvatarGroup>
             
              
            </Stack>
        </div>
      );
}

export default Activebadge