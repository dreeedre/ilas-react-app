// src/Components/CardSlider.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Sample card image data
const cardData = [
    { img: '/img/doawp.jpg', title: 'Diary of a Wimpy kid' },
    { img: '/img/kzone.jpeg', title: 'K-Zone' },
    { img: '/img/marvel.jpg', title: 'Avengers End Times Marvel Tales #1' },
    { img: '/img/poh.jpg', title: 'The Pursuit of Happiness' },
    { img: '/img/GS.jpg', title: 'Geronimo Stilton' },
];

export default function CardSlider() {
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px', // Lower the position
        padding: '20px',
        backgroundColor: '#e4f1ff', // Rectangle background color
        boxShadow: '0px 4px 15px rgba(17, 50, 47, 0.3)', // Shadow with color #11362F
        borderRadius: '8px', // Rounded corners for a smoother look
      }}
    >
      <IconButton onClick={scrollLeft}>
        <ArrowBackIosIcon />
      </IconButton>
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          width: '80%',
          padding: '10px 0',
        }}
      >
        {cardData.map((item, index) => (
          <Box key={index} sx={{ textAlign: 'center', marginRight: '32px' }}> {/* Increased spacing */}
            <Card sx={{ minWidth: '221px' }}>
              <CardMedia
                component="img"
                height="318"
                image={item.img}
                alt={item.title}
                sx={{ objectFit: 'cover' }}
              />
            </Card>
            {/* Title text outside the card */}
            <Typography
              variant="body1"
              component="p"
              sx={{
                marginTop: '10px',
                fontWeight: 'bold',
                color: '#11326F',
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
      <IconButton onClick={scrollRight}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}