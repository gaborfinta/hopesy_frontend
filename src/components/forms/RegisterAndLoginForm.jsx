import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MoneyProgress from '../sliders/MoneyProgress';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LoginImage from '../../img/Login2.png';
import LoginGoogleCard from '../cards/LoginGoogleCard';

const useStyles = makeStyles((theme) => ({
    button: {
        "&:hover": {
            backgroundColor: "#FF0266",
            color: 'white'
          },
    },
    images: {
        maxHeight: "500px",
        maxWidth: "400px"
    },
    donateButton: {
        margin: "20px"
    },
    registerAndLoginButton: {
        "&:hover": {
            color: '#3ff1aa'
          },
    },
  }));


export default function RegisterAndLoginForm(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <ul>
            <li 
                style={{
                    display: 'inline-block',
                    margin: '0 20px',
                    cursor: 'pointer',
                }}
                className={classes.registerAndLoginButton}
                onClick={handleClickOpen}
            >
                REGISZTRÁCIÓ
            </li>
            <li style={{
                    display: 'inline-block',
                    margin: '0 20px',
                    cursor: 'pointer',
                }}
                className={classes.registerAndLoginButton}
                onClick={handleClickOpen}
            >
                BELÉPÉS
            </li>
        </ul>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
       
        <DialogTitle id="alert-dialog-title">
          Belépés Google fiókkal
        </DialogTitle>
        <DialogContent>
          <LoginGoogleCard setUser={props.setUser}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Bezárás
          </Button>
        </DialogActions>
      </Dialog>
  
    </div>
  );
}

