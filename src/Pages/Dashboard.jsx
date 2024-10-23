import React from 'react';
import Sidenav from "../Components/Sidenav";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import TextField from '@mui/material/TextField';

export default function Dashboard() {
  return (
    <>
      <Box sx={{ display: 'flex', height: '100vh', overflowY: 'auto' }}>
        <Sidenav />

        {/* Main Dashboard content */}
        <Box sx={{ flexGrow: 1, position: 'relative', margin: 0, padding: 0 }}>
          {/* Large container to allow scrolling */}
          <Box
            component="div"
            sx={{
              minHeight: '3000px',
              backgroundColor: '#f5f5f5',
              position: 'relative',
              padding: '16px',
              boxSizing: 'border-box',
            }}
          >
            {/* Cart Button */}
            <IconButton
              sx={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              <ShoppingBagOutlinedIcon style={{ color: '#11326F' }} />
            </IconButton>

            {/* Image Placeholder */}
            <Box
              component="div"
              sx={{
                width: '100%',
                height: '400px',
                marginBottom: '40px',
              }}
            >
              <img
                src="/img/books.png"
                alt="Placeholder"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.7' }}
              />
            </Box>

            {/* Search Bar */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '200px',
              }}
            >
              <TextField
                id="search-bar"
                label="Search"
                variant="outlined"
                sx={{
                  width: '50%',
                  backgroundColor: 'white',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Box>

            {/* Text Content */}
            <Box sx={{ marginTop: '300px', textAlign: 'left', marginLeft: '20px' }}>
              <h1 style={{ marginBottom: '5px', color: '#11326F' }}>WELCOME TO iLAS</h1>
              <p style={{ fontSize: '18px', marginBottom: '5px' }}>
                iACADEMY's Library Management System (LMS)
              </p>
              <p style={{ fontSize: '16px', marginBottom: '8px' }}>
                iACADEMY Library Automated System (iLas) is bringing the library
              </p>
              <p style={{ fontSize: '16px', marginBottom: '32px' }}>
                to its users for a more convenient way to access the school's library
              </p>

              {/* New Arrivals Section */}
              <Box sx={{ marginTop: '300px', textAlign: 'left', marginLeft: '20px' }}>
                <h1 style={{ marginBottom: '5px', color: '#11326F' }}>New Arrivals</h1>

                {/* Centered Image Placeholder */}
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: '20px',
                    marginBottom: '40px',
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      width: '1139px',
                      height: '466px',
                      backgroundColor: '#e0e0e0',
                    }}
                  >
                    <img
                      src="/img/new-arrivals.png"
                      alt="New Arrivals Placeholder"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

