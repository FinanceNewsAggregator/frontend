import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { createRouter } from './create-router'
import './App.css';
import { Box, CircularProgress } from '@mui/material';
import { RouterProvider } from 'react-router-dom';

const router = createRouter();

 

function App() {

    return (
                <React.Suspense fallback={<CircularProgress />}>
                    <Box style={{ minWidth: '400px', minHeight: '400px' }}>
                        <RouterProvider router={router} />
                    </Box>
                </React.Suspense>
    );
}

export default App;
