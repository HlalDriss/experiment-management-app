// src/components/common/CustomButton.js

import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({
  children,
  variant = 'contained',
  color = 'primary',
  onClick,
  fullWidth = false,
  size = 'medium', // Default size
  sx = {}, // For additional styling
  ...props
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      fullWidth={fullWidth}
      size={size}
      sx={sx}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
