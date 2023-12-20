import { Box } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import React from 'react'

function Sidebar() {
  return (

    <Box sx={{backgroundColor:'blue',display:{xs:'none',sm:'block'}}} flex={2} p={1} >

          <div>sidebar</div>
    </Box>


    
  )
}

export default Sidebar