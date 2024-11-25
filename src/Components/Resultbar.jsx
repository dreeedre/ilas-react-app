// src/Components/ResultsBar.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const ResultsBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: 3,
        p: 2,
        bgcolor: '#f7f7f7',  // Matching FilterSidebar color
        borderRadius: 3,
        border: '2px solid #e0e0e0',  // Matching FilterSidebar border
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        Results
      </Typography>
      <FormControl variant="outlined" size="small">
        <Select defaultValue="newest" sx={{ minWidth: 150 }}>
          <MenuItem value="newest">Newest to Oldest</MenuItem>
          <MenuItem value="oldest">Oldest to Newest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ResultsBar;