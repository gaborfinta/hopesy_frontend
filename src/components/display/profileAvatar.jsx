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
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    }
  },
}));

export default function ProfileAvatar(props) {
  const classes = useStyles();
  const userData = props.userData;
  const size = props.size === "large" ? classes.large : classes.small;

  return (
    <div className={classes.root}>
       {/* <Badge badgeContent={"✓"} invisible={!userData.isValidated} color="error"> */}
            <Badge
            badgeContent={0}
            color="none"
            overlap="rectangle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}>
                <Avatar 
                  alt="Profile picture" 
                  src={userData.profile_pic} 
                  className={size}
                  />    
            </Badge>
        {/* </Badge>  */}
    </div>
  );
}