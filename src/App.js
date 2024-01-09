import React from 'react';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';

import { Box, Typography } from '@mui/material';

function App() {
  return (
    <Box sx={{backgroundColor:"#CE1126"}}>
      <Header/>
      <MainSection/>
      <Typography variant="h4" sx={{ color:"white", textAlign: 'center', mb:"20px"}}>VIGENCIA: 30/04/2024</Typography>
      <Typography sx={{backgroundColor:"white", textAlign: 'center'}}></Typography>
    </Box>
  );
}

export default App;
