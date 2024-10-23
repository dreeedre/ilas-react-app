import React from 'react';
import Sidenav from "../Components/Sidenav";
import Navbar from "../Components/Navbar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Elibrary() {
return (
    <>
    <Navbar />
     <Box sx={{ display: 'flex' }}>
     <Sidenav />
     <h1>E-Library</h1>
     </Box>
     
    </>
)

}