import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight: 200,
    margin: '15px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '45vw'
  },
  large: {
    width: 120,
    height: 120,
    marginTop: 10,
    marginBottom: 10
  },
});

export default function ProfileCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Levente Fodor
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Budapest
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item xs={6}>
            <Avatar 
                alt="profile picture" 
                src={props.userData.profilePictureUrl} 
                className={classes.large}/>
            </Grid>
        </Grid>
            
    
    </Card>
  );
}