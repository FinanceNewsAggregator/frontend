import React from 'react'
import { Typography, Button} from '@mui/material'
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
        <Grid item xs={2}>
          <MyButton hoverColor={hoverColor[0]} text={texts[0]}  width={140} height={50}></MyButton>
        </Grid>
        <Grid item xs={2}>
          <MyButton hoverColor={hoverColor[1]} text={texts[1]} width={140} height={50}></MyButton>
        </Grid>
        <Grid item xs={2}>
          <MyButton hoverColor={hoverColor[2]} text={texts[2]}  width={140} height={50}></MyButton>
        </Grid>
      </React.Fragment>
    );
}

const SourcesPage = () => {
    return (
        <React.Fragment>
          <Typography variant="h5" marginTop={15} align="center">
            Tell us the media you would like to see
          </Typography>
    
          <Grid container spacing={1} width="80%" margin={"auto"} justifyContent="center" marginTop={5}>
            <Grid container item spacing={3} margin={"auto"} justifyContent="center" textAlign={"center"}>
              <FormRow
                texts={["Business Insider", "CNBC", "BBC"]}
                hoverColor={["#E63946", "#003c62", "#4ca657", "#457B9D", "#7209B7"]}
              />
            </Grid>
            <Grid container item spacing={3} margin={"auto"} justifyContent="center" textAlign={"center"}  marginTop={5}>
              <FormRow
                texts={["NY Times", "Washington Post", "Bloomberg"]}
                hoverColor={["#FFC107", "#06D6A0", "#E0AEB5", "#FFC8DD", "#f44336"]}
              />
            </Grid>
          </Grid>
    
          <Grid container justifyContent="center" marginTop={20}>
            <Button component={Link} to="/summary" variant='contained' sx={{textTransform:'none', width:120, height:40, borderRadius:8}}>Next</Button>
          </Grid>
        </React.Fragment>
      );
}

export default SourcesPage