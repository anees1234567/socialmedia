import React from 'react'
import { Box } from '@mui/material'
import Birthday from './Birthday'
import Activebadge from './Activebadge';
import Friendrequest from './friendrequest/Friendrequest';

function Rightbar() {

  const birthdayList = [{ name: 'Maxwell' }, { name: 'Henry' }, { name: 'James' },{ name: 'Ram' },{ name: 'beno' }];

  return (
<Box sx={{display:{xs:'none',sm:'block'}, overflowY: 'scroll',
      // Adjust scrollbar width using a CSS rule within sx
      '&::-webkit-scrollbar': {
        width: '5px',
      }}} flex={4} p={1}>
{birthdayList.length > 0 ? 
  <Birthday birthdayList={birthdayList} />
 : 
 console.log("no birthdays")
}
<Activebadge  />
<Friendrequest />
  </Box>  )
}

export default Rightbar