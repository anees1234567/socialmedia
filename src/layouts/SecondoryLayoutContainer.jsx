import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { Outlet} from "react-router-dom";
import Navbar from '../Components/common/navbar/Navbar';
import Sidebar from '../Components/common/leftside/Sidebar';

function SecondoryLayoutContainer() {

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
        <Stack sx={{paddingTop:"15vh",height:'80vh'}}  direction={'row'} >
                  <Sidebar />
                  <section style={{width:'80%'}}>
                    <Outlet/>
                  </section>
                  
           </Stack>
    </Box>
</ThemeProvider>
  )
}

export default SecondoryLayoutContainer