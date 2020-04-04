import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 10,
    },
    form: {
        margin: 10
    },
    button: {
        margin: 10
    }
}));

export default function EditProfilePageForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Adatlap szerkesztése
                </Typography>  
                <form className={classes.form} noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} >
                            <TextField id="firstName" fullWidth required label="Vezetéknév" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <TextField id="lastName" fullWidth required label="Keresztnév" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="locatin" fullWidth required label="Település" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField type="email" id="email" fullWidth required label="Email cím" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="accountNumber" fullWidth required label="Bankszámlaszám" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button color="primary" variant="contained" size="large">Mentés</Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
    </Card>
    </div>
  );
}