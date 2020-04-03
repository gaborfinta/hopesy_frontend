import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 200,
    margin: '15px',
    background: '#71B771',
    color: "white",
  },
  cardHeader: {
    color: "white",
    size: 10
  },
  moneySection: {
    paddingLeft: 15
  },
  avatar: {
    background: '#66BB6A',

  },
});

export default function AllCharityEventsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised>
         <CardHeader
            className={classes.cardHeader}
            title={
                <Typography gutterBottom variant="overline" component="h2">
                   Adománygyűjtés
                </Typography>
             }
             avatar={
                <FavoriteIcon />
              }
        />
        <Typography className={classes.moneySection} gutterBottom variant="h5" component="h2">
                   5
        </Typography>
    </Card>
  );
}