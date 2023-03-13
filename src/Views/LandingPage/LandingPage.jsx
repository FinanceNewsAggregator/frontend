import React from "react";
import { Paper, Box, Typography, Stack, Button } from "@mui/material";
import { AspectRatio } from "@mui/icons-material";

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
      <Typography variant="h6" marginTop={1} align="center">More information in less time</Typography>
      <Stack direction={'row'} style={{
          margin: "auto",
          height: "auto",
          width: "75%",
          maxHeight: { xs: "20%", md: "20%" },
          maxWidth: { xs: "90%", md: "90%" },
          justifyContent: 'center',
          marginBottom:10
        }}
        spacing={50}>

      <Button style={{textTransform:'none', width:180}} variant="contained" color='primary'>Log In</Button>
      <Button style={{textTransform:'none', width:180}} variant="contained" color='primary'>Register</Button>
      </Stack>
    </React.Fragment>
  );
};

export default LandingPage;
