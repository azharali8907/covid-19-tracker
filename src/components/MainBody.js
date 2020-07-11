import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalData from './GlobalData';
import CountryPicker from './CountryPicker';
import Chart from './Chart';
import TabBtn from './TabBtn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: '30px',  
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainBody() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <TabBtn/>
            
            {/*<GlobalData/>
            <Chart/>
            */ }
          </Paper>
          
        </Grid>
       
        
       
      </Grid>
      
    </div>
  );
}