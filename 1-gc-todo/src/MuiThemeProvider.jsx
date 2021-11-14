import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";

// create an mui theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#2196f3',
        },
        secondary: {
            main: '#f44336',
        },
    },
});

// create a theme provider
const MuiThemeProvider = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

export default MuiThemeProvider;

