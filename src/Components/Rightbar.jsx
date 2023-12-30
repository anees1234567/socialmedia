import React from 'react'
import { Box } from '@mui/material'
import Birthday from './Birthday'
function Rightbar() {
  return (
<Box sx={{

display:{xs:'none',sm:'block'}}} 
flex={4} p={1}>
  
  <Birthday/>
  
  </Box>  )
}

export default Rightbar