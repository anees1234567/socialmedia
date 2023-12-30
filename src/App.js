
import './App.css';
import { Box,Container,Stack,createTheme,ThemeProvider } from '@mui/material';
import Sidebar from './Components/Sidebar';
import Rightbar from './Components/Rightbar';
import Feed from './Pages/Feed';
import Navbar from './Components/Navbar';

function App() {
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
  );
}

export default App;
