import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import { useNavigate } from "react-router-dom";

const drawerWidth = 270;

// Main styled component adjusted to work with open state
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'space-between', // Adjusted for spacing
}));

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#11326F', // Set drawer color
            color: '#fff', // Optional: set text color for better contrast
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {/* Small Image Placeholder */}
          <Box
            sx={{
              width: '120px', // Adjust size of the image
              height: '40px', // Adjust size of the image
              marginLeft: '8px',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <img
              src="/img/iAc2.png" // Replace with your placeholder image path
              alt="Small Placeholder"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>

          {/* Left Arrow Icon */}
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: '#fff' }} /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding onClick={() => { navigate("/") }}> 
            <ListItemButton>
              <ListItemIcon>
                <HomeRoundedIcon style={{ color: '#fff' }} /> {/* Set the icon color to white */}
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          {/* Additional List Items */}
          <ListItem disablePadding onClick={() => { navigate("/elibrary") }}>
            <ListItemButton>
              <ListItemIcon>
                <MenuBookRoundedIcon style={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary="E-library" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => { navigate("/booktracker") }}>
            <ListItemButton>
              <ListItemIcon>
                <ClassRoundedIcon style={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary="Book Tracker" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => { navigate("/rules") }}>
            <ListItemButton>
              <ListItemIcon>
                <FormatListBulletedRoundedIcon style={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary="Rules & Regulations" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        {/* Button to open drawer when it's closed */}
        {!open && (
          <IconButton onClick={() => setOpen(true)} sx={{ position: 'absolute', top: 20, left: 20 }}>
            <ChevronRightIcon style={{ color: '#11326F' }} />
          </IconButton>
        )}
      </Main>
    </Box>
  );
}