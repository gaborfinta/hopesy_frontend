import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#32CD32', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#3CB371',
  },
})(LinearProgress);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function MoneyProgress(props) {
  const classes = useStyles();
  const current = props.current;
  const total = props.total;

  function calculatePercent() {
    return Math.floor((current / total ) * 100)
  }

  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={calculatePercent()}
      />
    </div>
  );
}