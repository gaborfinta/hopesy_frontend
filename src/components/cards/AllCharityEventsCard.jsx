import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { styles } from '../../style';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    maxHeight: 200,
    margin: '15px',
    background: styles.inherit,
    color: "white",
  },
  cardHeader: {
    color: "white",
    size: 10
  },
  moneySection: {
    paddingLeft: 15
  }
});

export default function AllCharityEventsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised variant="outlined">
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