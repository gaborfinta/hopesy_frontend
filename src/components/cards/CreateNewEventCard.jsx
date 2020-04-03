import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CreateNewEventModal from '../display/CreateNewEventModal';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    "&:hover": {
      backgroundColor: "#efefef"
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
  },
});

export default function CreateNewEventCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Új adománygyűjtés
        </Typography>
        <CreateNewEventModal />
      </CardContent>
    </Card>
  );
}