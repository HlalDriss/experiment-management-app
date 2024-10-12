// src/components/Header.js

import React from 'react';
import { Box, Typography, Button, Menu, MenuItem, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logged out');
    handleMenuClose();
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <Box 
      sx={{ 
        backgroundColor: 'primary.main', 
        color: 'primary.contrastText', 
        padding: 2, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}
    >
      {/* Left Section - Logo */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginRight: 2 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="/path/to/logo.png" alt="Logo" height="40" />
          </Link>
        </Typography>
      </Box>

      {/* Middle Section - Navigation Links (Centered) */}
      <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
        <Button color="inherit" component={Link} to="/request-experiment" sx={{ color: 'inherit', mx: 2 }}>
          Request Experiment
        </Button>
        <Button color="inherit" component={Link} to="/my-requests" sx={{ color: 'inherit', mx: 2 }}>
          My Requests
        </Button>
      </Box>

      {/* Right Section - User Profile */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton 
          color="inherit" 
          onClick={handleProfileMenuOpen}
          sx={{ color: 'inherit' }}
        >
          <AccountCircle fontSize="large" />
        </IconButton>
        
        {/* Profile Menu */}
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
