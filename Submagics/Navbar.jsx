'use client';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar>
        {/* Logo Section */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          {/* <img src="your-logo-url-here" alt="logo" style={{ height: '30px', marginRight: '15px' }} /> */}
          <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>submagic</span>
        </Typography>

        {/* Menu Links for larger screens with lowercase and small font */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
          <Button color="inherit" sx={{ fontSize: '14px', ml: 2, textTransform: 'none' }}>Features</Button>
          <Button color="inherit" sx={{ fontSize: '14px', ml: 2, textTransform: 'none' }}>Use Cases</Button>
          <Button color="inherit" sx={{ fontSize: '14px', ml: 2, textTransform: 'none' }}>Free tools</Button>
          <Button color="inherit" sx={{ fontSize: '14px', ml: 2, textTransform: 'none' }}>Pricing</Button>
          <Button color="inherit" sx={{ fontSize: '14px', ml: 2, textTransform: 'none' }}>Affiliate</Button>
          <Button color="inherit" sx={{ fontSize: '14px', ml: 2, textTransform: 'none' }}>Blog</Button>
        </Box>

        {/* Try for free button always visible, even on small screens */}
        <Button
          color="inherit"
          variant="contained"
          sx={{
            backgroundColor: '#ff5722',
            color: 'white',
            borderRadius: '20px',
            padding: '5px 15px',
            mr: 2,
            fontSize: { xs: '12px', md: '14px' }, // Smaller size on mobile
            padding: { xs: '3px 10px', md: '5px 15px' } // Smaller padding on mobile
          }}
        >
          Try for free
        </Button>

        {/* Login button only on larger screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Button
            color="inherit"
            variant="outlined"
            sx={{ mr: 2, borderRadius: '20px', padding: '5px 15px' }}
          >
            Login
          </Button>
        </Box>

        {/* Menu icon for small screens */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            display: { xs: 'block', md: 'none' },
            ml: 2,
            fontSize: { xs: '1rem', md: 'inherit' } // Smaller menu icon on mobile
          }}
          onClick={handleMenuClick}
        >
          <MenuIcon sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }} /> {/* Adjusting icon size */}
        </IconButton>

        {/* Dropdown menu for small screens */}
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>features</MenuItem>
          <MenuItem onClick={handleClose}>use cases</MenuItem>
          <MenuItem onClick={handleClose}>free tools</MenuItem>
          <MenuItem onClick={handleClose}>pricing</MenuItem>
          <MenuItem onClick={handleClose}>affiliate</MenuItem>
          <MenuItem onClick={handleClose}>blog</MenuItem>
          <MenuItem onClick={handleClose}>Login</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
