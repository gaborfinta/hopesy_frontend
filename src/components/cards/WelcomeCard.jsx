import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import WelcomeImage from '../../img/welcome.png';
import { styles } from '../../style'
import AllDonationsCard from './AllDonationsCard';
import AllUsersCard from './AllUsersCard';
import AllCharityEventCard from './AllCharityEventsCard';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 900,
    maxHeight: 900,
    margin: '15px',
    background: styles.welcomecard,
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

export default function WelcomeCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised variant="outlined">
          <CardContent>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography variant="h4" component="h2">
                        <strong>Üdv újra itt Levente!</strong>
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p">
                            Mi nagyra értékeljük, hogy a közösségünk tagja vagy, 
                            és hozzájárulsz egy 
                            összetartóbb, 
                            boldogabb világ kialakitásához.
                    </Typography>
                    <AllDonationsCard />
                    <AllUsersCard />
                    <AllCharityEventCard />
                    <Button 
                      variant="contained"
                      style={{backgroundColor: styles.secondary, color: 'white'}}
                      onClick={(e) => props.handleExpandClick()}
                      >
                      Terület elrejtése
                    </Button>
                </Grid>
                <Grid item xs={6}>
                   <img 
                        src={WelcomeImage} 
                        style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            width: 'auto'
                        }}
                        />
                </Grid>
            </Grid>
      </CardContent>
    </Card>
  );
}