import React from 'react';
import Box from '@mui/material/Box';

const CustomBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
         height: '50vh', // Ensures vertical centering
        flexDirection: 'column', // Ensures stacked form elements
        padding: '20px',
        margin:'30px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Shadow property
        borderRadius: '8px', // Optional: Add some rounding for smoothness
        backgroundColor: 'white', // Ensure the background contrasts with the shadow
      }}
    >
      {children}
    </Box>
  );
};

export default CustomBox;
