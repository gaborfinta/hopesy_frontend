import React, { useContext, useState, useEffect } from "react";

import EventCard from './EventCard';
import Grid from '@material-ui/core/Grid';


export default function EventCardContainer(props) {
   
    const causes = props.causes;

     function generateEventCards(causes) {
        return(
            <Grid container spacing={3}>
            {causes.map((item, index) => {
                return(
                    <Grid item xs={3}>
                        <EventCard cause={item} />
                        </Grid>
                )
            })}
            </Grid>
        )
    }


    return (
        <div>
           {
            causes != null || causes != undefined
            ?
            generateEventCards(causes)
            :
            null
            }
        </div>
    );
};