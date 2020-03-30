import React, { useContext, useState } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import EventCard from '../components/cards/EventCard';
import CreateNewEventCard from '../components/cards/CreateNewEventCard';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    },
  }));


export default function CharityEvents() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <CreateNewEventCard />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <EventCard />
                </Grid>
            </Grid>
        </div>
    );
};