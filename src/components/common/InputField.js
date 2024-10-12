// src/components/common/InputField.js

import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
  options = [],
  multiline = false,
  rows,
  variant = 'outlined',
  color = 'primary',
  fullWidth = true,
  sx = {}, // For additional styling
  ...props
}) => {
  if (type === 'select') {
    return (
      <TextField
        select
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        fullWidth={fullWidth}
        variant={variant}
        color={color}
        sx={sx}
        {...props}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }

  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      required={required}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={multiline ? rows : undefined}
      variant={variant}
      color={color}
      sx={sx}
      {...props}
    />
  );
};

export default InputField;
