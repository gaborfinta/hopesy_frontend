import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShoppingImage from '../../img/shopping2.png';
import EventModal from '../display/EventModal';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';
import MoneyProgress from '../sliders/MoneyProgress';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxHeight: 300
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
  },
}));

export default function EventCard(props) {
  const classes = useStyles();
  const cause = props.cause;

  return (
    <Card className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
            <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {cause.title}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                <strong>
                  {cause.sum_target} Ft
                </strong>
              </Typography>
              </CardContent>
              <div className={classes.controls}>
              <Button
                size="small"
                color="primary"
                startIcon={<FacebookIcon />}
                />
              <EventModal cause={cause}/>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              className={classes.cover}
            >
              <img 
                src={ShoppingImage} 
                style={{
                    maxHeight: '80%',
                    maxWidth: '80%',
                    minHeight: '50%',
                    minWidth: '50%',
                    width: 'auto',
                }}
                />
            </CardMedia>
          
        </Grid>
        <Grid item xs={12}>
          <MoneyProgress current={cause.sum_collected} total={cause.sum_target} />
        </Grid>
      </Grid>
    </Card>
  );
}
