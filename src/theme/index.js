// src/theme/index.js

import { createTheme } from '@mui/material/styles';
import colors from './colors';
import typography from './typography';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.main,
      contrastText: colors.primary.contrastText,
    },
    secondary: {
      main: colors.secondary.main,
      contrastText: colors.secondary.contrastText,
    },
    background: {
      default: colors.neutral.main,
    },
    error: {
      main: colors.error.main,
    },
    success: {
      main: colors.success.main,
    },
  },
  typography,
  spacing: 8, // Default spacing unit in Material-UI (1 unit = 8px)
});

export default theme;
