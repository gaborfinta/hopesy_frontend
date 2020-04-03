import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight: 200,
    margin: '15px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: "white",
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: 25
  }
});

export default function VerifiedProfileBadgeCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised>
        <Typography variant="h5" align="center" component="h2">
            Ellenőrzött profil ✓
        </Typography>  
    </Card>
  );
}