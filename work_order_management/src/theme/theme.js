// src/theme.js
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#ffff', // Your primary color
    },
    secondary: {
      main: '#dfdfdfff', // Your secondary color
      blue: '#1c5a80ff', // Your secondary color
    },
    // You can also define dark mode here or in a separate file/logic
    // mode: 'dark', 
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    // Add other typography variants as needed
  },
  // Add component-specific overrides, spacing, etc. here
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true, // Example of a default prop change
      },
    },
  },
});

export default customTheme;