import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { styles } from '../../../style';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  card: {
    color: styles.inherit,
  },
  cardContainer: {
    float: 'left',
    paddingLeft: 10
  }
});

export default function NumberOfThanksCard() {
  
  const classes = useStyles();

  return (
    <div>
        <Typography className={classes.cardContainer} variant="h5" align="center" component="h2">
            <FavoriteIcon className={classes.card} />  15 
        </Typography> 
    </div>
       
   
  );
}