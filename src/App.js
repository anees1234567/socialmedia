
import './App.css';
import { Box,Container,Stack } from '@mui/material';
import Sidebar from './Components/Sidebar';
import Rightbar from './Components/Rightbar';
import Feed from './Components/Feed';

function App() {
  return (
    <>
    
          <Box sx={{backgroundColor:"red"}}>
                  <Stack  direction={'row'} spacing={1}>
                        <Sidebar/>
                        <Feed/>
                        <Rightbar/>
                  </Stack>

          </Box>
    
    
    
    </>
  );
}

export default App;
