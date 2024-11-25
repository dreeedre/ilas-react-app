// src/pages/Elibrary.js
import React from 'react';
import Sidenav from "../Components/Sidenav";
import Navbar from "../Components/Navbar";
import Filtersidebar from "../Components/Filtersidebar";
import Resultbar from "../Components/Resultbar"; // Import ResultsBar
import Box from '@mui/material/Box';

export default function Elibrary() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Filtersidebar />
        {/* Main content area */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Resultbar /> {/* Include the ResultsBar */}
          {/* Your main content goes here */}
        </Box>
      </Box>
    </>
  );
}