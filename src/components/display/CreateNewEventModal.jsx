import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    button: {
        "&:hover": {
            backgroundColor: "#efefef",
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
    uploadButton: {
        maxHeight: "200px",
        maxWidth: "250px"
    }
  }));


export default function CreateNewEventModal() {
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
        className={classes.button}
        onClick={handleClickOpen}>
        <AddCircleIcon 
            color="disabled" 
            style={{ fontSize: 100 }}/>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        maxWidth='lg'
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Új adománygyűjtés létrehozása"}</DialogTitle>
        <DialogContent>
        <div>
        <Card className={classes.root} variant="outlined">
            <CardContent> 
                <form className={classes.form} noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} >
                            <TextField id="eventName" fullWidth required label="Gyűjtés neve" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <TextField id="requestedMoney" 
                                fullWidth 
                                required 
                                label="Számlán szereplő összeg" 
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Ft</InputAdornment>,
                                  }}
                                />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="locatin" fullWidth required label="Location" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Button
                                className={classes.uploadButton}
                                color="primary"
                                variant="contained"
                                component="label"
                                >
                                Kép feltöltése
                                <input
                                    type="file"
                                    style={{ display: "none" }}
                                />
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <RadioGroup aria-label="gender" name="gender1">
                                <FormControlLabel value="female" control={<Radio />} label="Profilom megjeleítése a gyűjtésnél" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} sm={12} >
                            <TextField
                                id="outlined-multiline-static"
                                label="Leírás"
                                multiline
                                fullWidth
                                rows="4"
                                variant="outlined"
                            />
                        </Grid>

                    </Grid>
                </form>
            </CardContent>
    <CardActions>
        <Button color="secondary" variant="contained" size="small">Létrehozás</Button>
    </CardActions>
    </Card>
        </div>
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

