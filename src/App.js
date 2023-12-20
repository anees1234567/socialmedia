
import './App.css';
import { Box,Container,Stack } from '@mui/material';
import Sidebar from './Components/Sidebar';
import Rightbar from './Components/Rightbar';
import Feed from './Components/Feed';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    
          <Box flexDirection={'column'}>
                    <Navbar />
                  <Stack  direction={'row'}  justifyContent={'space-between'}>
                        <Sidebar/>
                        <Feed/>
                        <Rightbar/>
                  </Stack>
          </Box>
    
    
    
    </>
  );
}

export default App;
