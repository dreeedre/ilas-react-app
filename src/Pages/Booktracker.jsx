import React from 'react';
import Sidenav from "../Components/Sidenav";
import Navbar from "../Components/Navbar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Booktracker() {
return (
    <>
     <Navbar />
     <Box sx={{ display: 'flex' }}>
     <Sidenav />
     <h1>Book Tracker</h1>
     </Box>
     
    
    </>
)

}