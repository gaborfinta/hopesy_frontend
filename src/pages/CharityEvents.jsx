import React, { useContext, useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import EventCard from '../components/cards/EventCard';
import CreateNewEventCard from '../components/cards/CreateNewEventCard';

import WelcomeCard from '../components/cards/WelcomeCard';
import CauseContext from '../contexts/CauseContext';
import {
    createCause,
    getAllCauses,
    getCauseById,
    getImageStringFromURL
} from '../components/api_helpers/cause';
import EventCardContainer from '../components/cards/EventCardContainer';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    },
  }));


export default function CharityEvents() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);

    const [causes, setCauses] = React.useState([]);

    useEffect(async () => {
        let allCauses = await getAllCauses();
        setCauses(allCauses);
    },[])

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {expanded ? 
                    <Grid item xs={6} sm={6}>
                        <WelcomeCard handleExpandClick={handleExpandClick}/>
                    </Grid>
                    :
                    null
                }
                <Grid item xs={6} sm={3}>
                    <CreateNewEventCard />
                </Grid>
                <CauseContext.Provider value={causes}>
                    <EventCardContainer causes={causes}/>
                </CauseContext.Provider>
            </Grid>
        </div>
    );
};