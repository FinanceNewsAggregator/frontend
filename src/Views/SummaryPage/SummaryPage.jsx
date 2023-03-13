
import React from 'react'
import { Typography, Button, Stack} from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MyButton from '../TagsPage/MyButton';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function FormRow(props) {
    const { texts, hoverColor } = props;
    return (
      <React.Fragment>
        <Grid item xs={1}>
          <MyButton hoverColor={hoverColor[0]} text={texts[0]}  width={140} height={50}></MyButton>
        </Grid>
        <Grid item xs={1}>
          <MyButton hoverColor={hoverColor[1]} text={texts[1]} width={140} height={50}></MyButton>
        </Grid>
        <Grid item xs={1}>
          <MyButton hoverColor={hoverColor[2]} text={texts[2]}  width={140} height={50}></MyButton>
        </Grid>
      </React.Fragment>
    );
}
const SummaryPage = () => {
  return (
    
    <React.Fragment>
    <Typography variant="h2" marginTop={15} align="center">
    Choose how much details you want in your news
    </Typography>
    <Grid container justifyContent="center" marginTop={20}>
        <Stack direction={'row'} spacing={2}>
            <MyButton hoverColor={'#E63946'} text={'Few details'} width={120} height={50}></MyButton>
            <MyButton hoverColor={'#003c62'} text={'Moderated'} width={120} height={50}></MyButton>
            <MyButton hoverColor={'#4ca657'} text={'Very detailed'} width={120} height={50}></MyButton>
        </Stack>
    </Grid>
    <Grid container justifyContent="center" marginTop={20}>
      <Button component={Link} to="/sentimental" variant='contained' sx={{textTransform:'none', width:120, height:40, borderRadius:8}}>Next</Button>
    </Grid>
  </React.Fragment>
  )
}

export default SummaryPage