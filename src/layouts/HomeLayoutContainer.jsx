import React from 'react';
import { Box,Stack,createTheme,ThemeProvider } from '@mui/material';
import Sidebar from '../Components/common/leftside/Sidebar';
import Rightbar from '../Components/HomelayoutComponents/rightside/Rightbar';
import Feed from '../Components/HomelayoutComponents/middleside/Feed';
import Navbar from '../Components/common/navbar/Navbar';


function HomeLayoutContainer() {

    const theme = createTheme({
        // palette: {
        //   mode: 'dark',
        // },
        shape:{
          borderRadius:"10px"
        }
      })
  return (
    <ThemeProvider theme={theme}>
    <Box flexDirection={'column'}>
              <Navbar    />
        <Stack sx={{paddingTop:"15vh",height:'80vh'}}  direction={'row'}  justifyContent={'space-between'}>
                  <Sidebar/>
                  <Feed  />
                  <Rightbar/>
           </Stack>
    </Box>
</ThemeProvider>
  )
}

export default HomeLayoutContainer