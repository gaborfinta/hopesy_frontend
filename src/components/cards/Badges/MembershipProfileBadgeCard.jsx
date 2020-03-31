import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  gold: {
    maxWidth: 400,
    maxHeight: 200,
    margin: '15px',
    background: 'linear-gradient(45deg, #F0E68C 30%, #FFD700 90%)',
    color: "black",
    padding: 25
  },
  silver: {
    maxWidth: 400,
    maxHeight: 200,
    margin: '15px',
    background: 'linear-gradient(45deg, #D3D3D3 30%, #A9A9A9 90%)',
    color: "black",
    padding: 25
  },
  bronze: {
    maxWidth: 400,
    maxHeight: 200,
    margin: '15px',
    background: 'linear-gradient(45deg, #B08557 30%, #9C7A3C 90%)',
    color: "black",
    padding: 25
  }
});


export default function MembershipProfileBadgeCard(props) {
    const classes = useStyles();
    const [badgeType, setBadgeType] = useState({
        title: "Gold",
        style: classes.gold
    })

    useEffect(() => {
        dsasds(props.memberShip)
    }, []);

    

    function dsasds(type) {
        switch(type){
            case 'Gold': setBadgeType({
                title: "Gold member",
                style: "gold"
            });
            break;

            case 'Silver': setBadgeType({
                title: "Silver member",
                style: "silver"
            });
            break;

            case 'Bronze': setBadgeType({
                title: "Bronze member",
                style: "bronze"
            });
            break;
        }
    } 

  return (
    <Card className={classes[badgeType.style]} raised>
        <Typography variant="h5" align="center" component="h2">
            {badgeType.title}
        </Typography>  
    </Card>
  );
}