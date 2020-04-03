// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import LockOpenIcon from '@material-ui/icons/LockOpen';
// import VpnKeyIcon from '@material-ui/icons/VpnKey';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     width: 500,
//   },
// });



// export default function RegisterAndLoginForm() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//     function generateCardContent(value) {
//         return (
//         <CardContent>
//             <Typography className={classes.title} color="textSecondary" gutterBottom>
//                 { value == 0 ? "Regisztráció" : "Belépés"}
//             </Typography>  
//         </CardContent>
//         )
//     }


//   return (
//       <div>
        
//         <Card className={classes.root} variant="outlined">
//             <BottomNavigation
//                 value={value}
//                 onChange={(event, newValue) => {
//                     setValue(newValue);
//                 }}
//                 showLabels
//                 className={classes.root}
//                 >
//                 <BottomNavigationAction label="Regisztráció" icon={<VpnKeyIcon />} />
//                 <BottomNavigationAction label="Belépés" icon={<LockOpenIcon />} />
//             </BottomNavigation>

//             {generateCardContent(value)}
//     </Card>
//       </div>
       
//   );
// }







import React, { useState } from 'react';
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
import SocialLoginCard from '../cards/SocialLoginCardContainer';

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


export default function RegisterAndLoginForm() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function addButtonNavigation() {
      return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            >
            <BottomNavigationAction label="Regisztráció" icon={<VpnKeyIcon />} />
            <BottomNavigationAction label="Belépés" icon={<LockOpenIcon />} />
        </BottomNavigation>
      )
  }

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
            {addButtonNavigation()}
        </DialogTitle>
        <DialogContent>
            <Grid container spacing={3}>
                <SocialLoginCard />
            </Grid>
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

