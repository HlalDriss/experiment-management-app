// src/components/Footer.js

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'primary.main', 
        color: 'primary.contrastText', 
        padding: 2, 
        textAlign: 'center', 
        marginTop: 'auto' 
      }}
    >
      <Typography variant="body1">
        © 2024 Experiment Management. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
