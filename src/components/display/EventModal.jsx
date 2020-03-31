import React from 'react';
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
    }
  }));


export default function EventModal() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button 
        variant="outlined" 
        color="secondary" 
        className={classes.button}
        onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        maxWidth='lg'
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Egyedülálló anya bevásárlása"}</DialogTitle>
        <DialogContent>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <img 
                src="https://d2h1pu99sxkfvn.cloudfront.net/b0/3498684/256965635_JEBHcinx8j/P0.jpg" 
                alt="invoice"
                className={classes.images} />
                <img 
                src="https://i2-prod.mirror.co.uk/incoming/article8523557.ece/ALTERNATES/s615/Groceries-in-a-shopping-trolley-move-through-a-food-aisle.jpg" 
                alt="invoice"
                className={classes.images} />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Typography component="h5" variant="h5">
                Product list
            </Typography>
            <ul>
                <li>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Alma
                    </Typography>
                </li>
                <li>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Körte
                    </Typography>
                </li> 
                <li>  
                    <Typography variant="body2" color="textSecondary" component="p">
                        Barack
                    </Typography>
                </li>
            </ul>
            <Typography component="h5" variant="h5">
                Progress of donations
            </Typography>
            <MoneyProgress />
            <Typography component="h6" variant="h6" color="secondary">
                345 Ft
            </Typography>
            <Typography component="h6" variant="h6" >
                of total 2000 Ft
            </Typography>
            <Typography component="h5" variant="h5">
                Location
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Budapest
            </Typography>
            <Typography component="h5" variant="h5">
                Description
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                className={classes.donateButton}
                startIcon={<CreditCardIcon />}
            >
                Donate
            </Button>
        </Grid>
      </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

