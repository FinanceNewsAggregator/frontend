import React from "react";
import { Paper, Box, Typography, Stack, Button } from "@mui/material";
import { AspectRatio } from "@mui/icons-material";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <React.Fragment>
      <img
        src={require('./landing_page.png')}
        alt="landing-page"
        style={{
          objectFit: "contain",
          display: "block",
          margin: "auto",
          height: "auto",
          width: "75%",
          maxHeight: { xs: "20%", md: "20%" },
          maxWidth: { xs: "90%", md: "90%" },
          paddingTop: 15
        }}
      />
      <Typography variant="h4" marginTop={1} align="center" sx={{wordWrap:'break-word'}}>Get the news that matters,</Typography>
      <Typography variant="h4" align="center" sx={{wordWrap:'break-word'}}>Fast!</Typography>
      <Typography variant="subtitle1" marginTop={1} align="center" sx={{wordWrap:'break-word'}}>We will always provide 
      you with the latest and most important news, </Typography>
      <Typography variant="subtitle1" align="center" sx={{wordWrap:'break-word'}}>
        just like a best friend running a podcast who always has your back and keeps you informed about what's happening in the world</Typography>
      <Stack direction={'row'} style={{
          margin: "auto",
          height: "auto",
          width: "75%",
          maxHeight: { xs: "20%", md: "20%" },
          maxWidth: { xs: "90%", md: "90%" },
          justifyContent: 'center',
          marginBottom:10,
          marginTop:10
        }}
        spacing={50}>

      <Button component={Link} to="/login" style={{textTransform:'none', width:180, borderRadius:10}} variant="contained" color='primary'>Log In</Button>
      <Button component={Link} to="/register" style={{textTransform:'none', width:180, borderRadius:10}} variant="contained" color='primary'>Register</Button>
      </Stack>
    </React.Fragment>
  );
};

export default LandingPage;
