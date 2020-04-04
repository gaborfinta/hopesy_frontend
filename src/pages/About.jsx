import React, { useContext, useState } from "react";
import AllDonationsCard from '../components/cards/AllDonationsCard';
import AllUsersCard from '../components/cards/AllUsersCard';
import AllCharityEventsCard from '../components/cards/AllCharityEventsCard';
import Grid from '@material-ui/core/Grid';
import WelcomeCard from '../components/cards/WelcomeCard';

export default function About() {
    
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <AllDonationsCard />
                </Grid>
                <Grid item xs={4}>
                    <AllUsersCard />
                </Grid>
                <Grid item xs={4}>
                    <AllCharityEventsCard />
                </Grid>
                <Grid item xs={12}>
                    <WelcomeCard />
                </Grid>
            </Grid> 
        </div>
    );
};



