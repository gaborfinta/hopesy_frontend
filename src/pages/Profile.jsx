import React, { useContext, useState } from "react";
import UserContext from '../contexts/UserContext';
import ProfileCard from '../components/cards/ProfileCard';
import VerifiedProfileBadgeCard from '../components/cards/Badges/VerifiedProfileBadgeCard';
import EditProfilePageForm from '../components/forms/EditProfileForm';
import Grid from '@material-ui/core/Grid';

export default function Profile() {
    
    const userData = useContext(UserContext);

    const data = [userData]

    return (
        <div>
           {/* {data.map((item, i) => {
               return (
                   <div>
                     {item.Age} 
                   </div>
               )
           })} */}
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <ProfileCard userData={userData} />
                <VerifiedProfileBadgeCard />
            </Grid>
            <Grid item xs={8}>
                <EditProfilePageForm />
            </Grid>
        </Grid>
           

        </div>
    );
};
