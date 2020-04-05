import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MoneyProgress from '../sliders/MoneyProgress';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Grid from '@material-ui/core/Grid';
import { styles } from '../../style';
import TextField from '@material-ui/core/TextField';

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


export default function EventModal(props) {
  const [open, setOpen] = React.useState(false);
  const [openTransfer, setOpenTransfer] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  const cause = props.cause;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenTransfer = () => {
    setOpenTransfer(true);
  };

  const handleCloseTransfer = () => {
    setOpenTransfer(false);
  };

  function addTransferForm(){
    return (
      <div>
        <form className={classes.form} noValidate autoComplete="off">
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6} >
                  <TextField id="cardNumber" fullWidth required label="Bankkártya szám" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6} >
                  <TextField id="accountName" fullWidth required label="Kártyán szereplő név" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField id="amount" fullWidth required label="Összeg" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField id="cvc" type="password" fullWidth required label="CVC Kód" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.donateButton}
                  >
                      Jóváhagy
                  </Button>

                  <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleCloseTransfer}
                  >
                      Mégse
                  </Button>
              </Grid>
          </Grid>
        </form>
      </div>
    )
  }

  return (
    <div>
      <Button 
        variant="outlined" 
        color="secondary" 
        className={classes.button}
        onClick={handleClickOpen}>
        Részletek
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        maxWidth='lg'
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {cause.title}
        </DialogTitle>
        <DialogContent>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <img 
                src={cause.images[0]}
                alt="invoice"
                className={classes.images} />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Typography component="h5" variant="h5">
                Adományok jelenlegi állása
            </Typography>
            <MoneyProgress current={cause.sum_collected} total={cause.sum_target} />
            <Typography component="h6" variant="h6">
                <span
                  style={{
                    color: styles.inherit,
                    float: 'left'
                  }}
                >
                  {cause.sum_collected}
                </span>
                <span style={{float: 'right'}}>
                  a {cause.sum_target} Ft-ból
                </span>
            </Typography>
            <br />
            <Button
                variant="contained"
                color="secondary"
                className={classes.donateButton}
                startIcon={<CreditCardIcon />}
                onClick={handleClickOpenTransfer}
            >
                Segítek
            </Button>
            {openTransfer ? addTransferForm() : null}
            <Typography component="h6" variant="h6">
                Település
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
                {cause.location}
            </Typography>
            <Typography component="h6" variant="h6">
                Leírás
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
             {cause.description}
            </Typography>
            
        </Grid>
      </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Bezárás
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

