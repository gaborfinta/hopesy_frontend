import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShoppingImage from '../../img/shopping2.png';
import EventModal from '../display/EventModal';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    margin: 10
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function EventCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Bevásárlás
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <strong>
              2000 Ft
            </strong>
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        <Button
          size="small"
          color="primary"
          startIcon={<FacebookIcon />}
          >
          Megosztás
        </Button>
        <EventModal />
        </div>
      </div>
      <CardMedia
        className={classes.cover}
      >
        <img 
          src={ShoppingImage} 
          style={{
              maxHeight: '100%',
              maxWidth: '100%',
              minHeight: '50%',
              minWidth: '50%',
              width: 'auto',
          }}
          />
      </CardMedia>
    </Card>
  );
}