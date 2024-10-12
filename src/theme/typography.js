// src/theme/typography.js
import colors from './colors';
const typography = {
    fontFamily: "Roboto, Arial, sans-serif",  // Use a clean sans-serif font
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700, // Bold for headers
      color: colors.primary.main, // Maroon color for headings
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      color: colors.primary.main,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: colors.neutral.dark, // Dark gray for body text
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
      textTransform: "none", // Avoid uppercase transformation for buttons
    },
  };
  
  export default typography;
  