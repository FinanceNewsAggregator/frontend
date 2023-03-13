import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { Typography, TextField, Button, Divider, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const LogInPage = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};
const handleSignUp = () => {
// do something with the user's email and password
if(email !="" && password!= ""){
console.log(`Email: ${email} | Password: ${password}`);
}
};
  return (
    
    <React.Fragment>
        <Box sx={{
        width: '25vw',
        height: '60vh',
        display:'flex', 
        flexDirection:'column',
        justifyContent:'flex-start',
        margin: 'auto',
        backgroundColor: '#F5F5F5',
        marginTop: 15,
        borderRadius:5, border: 'solid 1px black', borderRadius: 2}} >
            <Typography variant="h6" marginLeft={7} marginTop={5} align='left' color={'black'}>LOG IN</Typography>
            <Typography variant="h7" marginLeft={7} marginTop={1} align='left' color={'black'} textTransform='none'>Email</Typography>
            <Box sx={{display:'flex', justifyContent:'center'}}>
              <Box sx={{display:'flex', flexDirection:'column', width:'70%'}}>
                <TextField id="email" variant="outlined" size="small" value={email}
              onChange={(e) => setEmail(e.target.value)} sx={{
                    "& label.Mui-focused": {
                        color: "black"
                      },
                      fieldset: { borderColor: "black" },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "black"
                        },
                        '&:hover fieldset': {
                            borderColor: 'black',
                          },
                      }, input: { color: 'black' },
                }}/>
              </Box>
            </Box>
            <Typography variant="h7" marginLeft={7} marginTop={1} align='left' color={'black'} textTransform='none'>Password</Typography>
            <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{display:'flex', flexDirection:'column', width:'70%'}}>
                <TextField id="password" type={'password'} variant="outlined" size="small" value={password}
              onChange={(e) => setPassword(e.target.value)} sx={{
                    "& label.Mui-focused": {
                        color: "black"
                      },
                      fieldset: { borderColor: "black" },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "black"
                        },
                        '&:hover fieldset': {
                            borderColor: 'black',
                          },
                      }, input: { color: 'black' },
                }}/>
                <FormControlLabel control={<Checkbox sx={{color:'black','&.Mui-checked': {
      color: 'black',
    },}}/>} label="Remember me" sx={{color:'black'}}/>
                </Box>
              </Box>
            <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{display:'flex', flexDirection:'column', width:'70%'}}>
              <Button variant='contained' sx={{textTransform:'none',height:40, borderRadius:2, marginTop:2}} onClick={handleSignUp}>SIGN UP</Button>
              
              <Divider orientation='horizontal'style={{height:'1px',width:'100%', borderColor:'black', marginTop:20}}/>


              <Typography variant="caption" align='center' color={'black'} textTransform='none' marginTop={1}>Connect with</Typography>
              {/* <Stack direction="row" spacing={2} margin='auto'>
                <IconButton aria-label="home" size="large">
                    <FacebookIcon style={{color:'black'}}/>
                </IconButton>
                <IconButton aria-label="notifications" size="large">
                    <GoogleIcon style={{color:'black'}}/>
                </IconButton>
                </Stack> */}
            <Button component={Link} to="/register" variant='text' sx={{color:'black', marginTop:2, textTransform:'none'}}>Need an account? Sign Up</Button>
            </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default LogInPage