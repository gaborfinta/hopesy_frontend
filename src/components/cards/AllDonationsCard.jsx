import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 200,
    margin: '15px',
    background: '#8074D9',
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

export default function AllDonationsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised>
         <CardHeader
            className={classes.cardHeader}
            title={
                <Typography gutterBottom variant="overline" component="h2">
                Összes adomány
                </Typography>
             }
             avatar={
                <AttachMoneyIcon />
              }
        />
        <Typography className={classes.moneySection} gutterBottom variant="h5" component="h2">
                   560.000 FT
        </Typography>
    </Card>
  );
}