
import React from 'react'
import { Typography, Button, Stack} from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MyButton from '../TagsPage/MyButton';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const SentimentalPage = () => {
  return (
    <React.Fragment>
    <Typography variant="h2" marginTop={15} align="center">
    Financial Sentimental Analysis
    </Typography>
    <Grid container justifyContent="center" marginTop={20}>
    <FormControlLabel
          value="top"
          control={<Switch color="primary" />}
          label="Activate it"
          labelPlacement="top" componentsProps={{ typography: { variant: 'h5' } }}/>
        
    </Grid>
    <Grid container justifyContent="center" marginTop={20}>
      <Button variant='contained' sx={{textTransform:'none', width:120, height:40, borderRadius:8}}>Next</Button>
    </Grid>
  </React.Fragment>
  )
}

export default SentimentalPage