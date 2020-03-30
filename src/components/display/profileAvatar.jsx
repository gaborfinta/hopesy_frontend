import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ProfileAvatar(props) {
  const classes = useStyles();
  const userData = props.userData;

  return (
    <div className={classes.root}>
       <Badge badgeContent={"✓"} invisible={!userData.isValidated} color="error">
            <Badge badgeContent={"gold"} color="error" overlap="rectangle"
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}>
                <Avatar alt="Profile picture" src={userData.profilePictureUrl} />    
            </Badge>
        </Badge> 
    </div>
  );
}