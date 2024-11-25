// src/Components/BookList.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';

const books = [
  {
    title: 'School-Based Feeding Program now covers entire school year',
    author: 'Malipot, Merlinda Hernando',
    publishDate: '2024',
    status: 'Available',
    imageUrl: '/path/to/image1.jpg',
  },
  {
    title: 'Food History',
    author: 'Author Name',
    publishDate: '2023',
    status: 'Unavailable',
    imageUrl: '/path/to/image2.jpg',
  },
  // Add more books here if needed
];

const BookList = () => {
  return (
    <Box sx={{ mt: 2, bgcolor: '#f7f7f7', borderRadius: 3, p: 2, boxShadow: 1 }}>
      {books.map((book, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <Checkbox sx={{ mr: 2, alignSelf: 'center' }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{`Title: ${book.title}`}</Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>{`Author: ${book.author}`}</Typography>
            <Typography variant="body2">{`Publish Date: ${book.publishDate}`}</Typography>
            <Typography variant="body2">{`Status: ${book.status}`}</Typography>
            <Button variant="outlined" sx={{ mt: 1 }}>ADD TO BOOK BAG</Button>
          </Box>
          <Box
            component="img"
            src={book.imageUrl}
            alt={book.title}
            sx={{ width: 145, height: 209, ml: 3 }}
          />
          {index < books.length - 1 && <Divider sx={{ width: '100%', mt: 2 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default BookList;