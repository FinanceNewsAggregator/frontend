import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Tooltip, FormControlLabel, Switch } from "@mui/material";
import React, { Dispatch, SetStateAction } from 'react'
import './MuiNavbar.css'
import { Link } from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
import MovieIcon from '@mui/icons-material/Movie';
import NewspaperIcon from '@mui/icons-material/Newspaper';
// import TemporaryDrawer from "./TemporaryDrawer";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { GlobalState } from '../../../modules/core/global-state';
import { CameraRoll } from '@mui/icons-material';
import { textTransform } from "@mui/system";
// Define our custom Navbar

const light = createTheme({
    palette: {
        primary: {
            main: '#FFFF'
        }, secondary: {
            main: '#FF5733'
        },
        background: { default: 'white', paper: 'white' },
    },
});
const dark = createTheme({
    palette: {
        primary: {
            main: '#FFFF'
        }, secondary: {
            main: '#FFFF'
        },
        background: { default: 'gray' },
        mode: 'dark',
    },
});
const MuiNavbar = ({ isDarkTheme, setIsDarkTheme }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [isDark, setIsDark] = useState(prefersDarkMode);

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const navbarLeftButtonsData = [
        {
            label: 'Ai Startup',
            to: '/',
            icon: <NewspaperIcon className="navLogo" fontSize='large' 
            />
        }
    ];
    const settings = ['settings'];


    // async function onLoginClicked() {
    //     await AuthService.login();
    // }

    // async function onUserClicked() {
    //     // await AuthService.login();
    // }

    return (
        <ThemeProvider theme={isDarkTheme ? dark : light}>
            <AppBar position='static'>

                {/* pushing to left and right of the screen */}
                <Toolbar style={{ justifyContent: 'space-between' }} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <div>
                        {/* Icon and logo  */}
                        {navbarLeftButtonsData.map((buttonData, index) => (
                            <IconButton key={index} size='large'
                                component={Link}
                                to={buttonData.to}
                                edge='start'
                                color='inherit'
                                aria-label="logo">
                                {buttonData.icon}
                                <Typography className='logoTypo' component='div'>
                                    {buttonData.label}
                                </Typography>
                            </IconButton>)
                        )}
                    </div>
                    {/* Using a stack to have the other options */}
                    
                    <Stack direction={'row'}>
                        <Tooltip>
                            <div style={{ justifyContent: 'space-between' }} >
                            <Button variant="text" color="inherit" style={{textTransform: 'none'}}>Home</Button>
                            <Button variant="text" color="inherit" style={{textTransform: 'none'}}>News</Button>
                            <Button variant="text" color="inherit" style={{textTransform: 'none'}}>Featured</Button>
                            </div>
                        </Tooltip>
                    </Stack>


                    <Stack direction={'row'}>
                        {/* {loggedUser ? (
                            <React.Fragment>
                                <Button className="stackBtn" color='inherit' component={Link} to="/account">{loggedUser.fullName}</Button>
                                <Tooltip title='Change Language'>
                                    <IconButton size="large" edge='end'>
                                        <LanguageIcon />
                                    </IconButton>
                                </Tooltip>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Button className="stackBtn" color='inherit' onClick={onLoginClicked}>Είσοδος/Σύνδεση</Button>
                                <Tooltip title='Change Language'>
                                    <IconButton size="large" edge='end'>
                                        <LanguageIcon />
                                    </IconButton>
                                </Tooltip>
                            </React.Fragment>
                        )} */}

                        <Button component={Link} to="/login"style={{textTransform:'none'}} color='inherit'>Sign Up</Button>
                        <Tooltip title='Change theme'>
                            <div>
                            <IconButton size="large" edge='end' onClick={changeTheme}>
                                {isDarkTheme ? <Brightness5Icon /> : <DarkModeIcon />}
                            </IconButton>
                            </div>
                        </Tooltip>
                    </Stack>
                </Toolbar>

                {/* Creating a toolbar for mobile devices */}
                <Toolbar style={{ justifyContent: 'space-between' }} sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <div>
                        <Stack direction={'row'}>
                            {/* <TemporaryDrawer isDark={isDarkTheme} setIsDark={setIsDarkTheme} /> */}
                            <IconButton>
                                <NewspaperIcon />
                            </IconButton>
                        </Stack>
                    </div>


                    <Stack direction={'row'}>
                        
                            <React.Fragment>
                                <Button className="stackBtn" color='inherit'>Log In/ Sign Up</Button>
                                <Tooltip title='Change Language'>
                                    <IconButton size="large" edge='end'>
                                        <LanguageIcon />
                                    </IconButton>
                                </Tooltip>
                            </React.Fragment>
                    </Stack>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )

}

export default MuiNavbar