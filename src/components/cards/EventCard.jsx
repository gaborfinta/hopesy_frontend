import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import AccessibleIcon from '@material-ui/icons/Accessible';
import Button from '@material-ui/core/Button';

import EventModal from '../display/EventModal';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    position:'relative',
  }
}));

export default function EventCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            FL
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Bevásárlás"
        subheader="November 12 2020"
        subheader="November 12 2020"
      />
      <CardMedia
        className={classes.media}
        image="https://www.telegraph.co.uk/content/dam/food-and-drink/2018/06/20/Veg_trans_NvBQzQNjv4Bqul3YgLXf2lEf3afmzmy4CHMT9HEIQzXrohIUnOkGrQA.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          2000 Ft
        </Typography>
      </CardContent>
      <CardActions >
        <Tooltip title="Disabled person">
          <IconButton aria-label="add to favorites">
            <AccessibleIcon color="primary"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Family with young children">
          <IconButton aria-label="share">
            <ChildFriendlyIcon color="secondary"/>
          </IconButton>
        </Tooltip> 
        <EventModal />
      </CardActions>
      
    </Card>
  );
}