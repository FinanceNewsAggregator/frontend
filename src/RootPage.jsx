import React from 'react';
import { Outlet } from 'react-router-dom';
import MuiNavbar from './Views/Shared/MuiNavbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';

const light = createTheme({
    palette: {
        primary: {
            main: '#777a82'
        }, secondary: {
            main: '#FFFF'
        },
        mode: 'light',
    },
});
const dark = createTheme({
    palette: {
        primary: {
            main: '#cfc8c9'
        },
        mode: 'dark',
    },
});

function RootPage() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [isDarkTheme, setIsDarkTheme] = useState(prefersDarkMode);

    return (
        <React.Fragment>
            <ThemeProvider theme={isDarkTheme ? dark : light}>
                <CssBaseline />
                <MuiNavbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
                <main>
                    <Outlet />
                </main >
            </ThemeProvider>
        </React.Fragment >
    );
}

export default RootPage;
