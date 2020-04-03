import React from 'react';
import SocialLoginCard from "./SocialLoginCard";
import Grid from '@material-ui/core/Grid';

import { data } from '../../data';

const SocialLoginCardContainer = () => {
    return data.map(app => {
        return (
            <Grid item xs={6}>
                <SocialLoginCard {...app} key={app.name} />
            </Grid>
        );
    });
};

export default SocialLoginCardContainer;