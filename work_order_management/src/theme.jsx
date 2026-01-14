import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, purple } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            mainBlue: "#2196f3",
            mainBlack: "#000000",
            mainGray: "#808080",
        },
        secondary: {
            secondaryBlue: "#61c6f5ff",
            secondaryBlack: "#464545ff",
            secondaryGray: "#a8a5a5ff",
        }
    },
    heading: {
        h1: {
            fontSize: '3rem',
            fontWeight: 600,
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});
