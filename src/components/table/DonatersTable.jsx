import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: 1280,
  },
  tableContainer: {
    margin: 30,
    maxWidth: 1280,
  }
});

function createData(name, memberShip, isValidated, location, numberOfDonations) {
  return { name, memberShip, isValidated, location, numberOfDonations };
}

const rows = [
  createData('John Doe', "Gold", "✓", "Kecskemét", 32),
  createData('Kovács Katalin', null, "✓", "Budapest", 10),
  createData('Kiss Tamás', "Bronze", null, null, 6),
  createData('Jackie Chan', "Silver", null, "Kistarcsa", 4),
  createData('Sántor Tamara', null, "✓", null, 30),
];

export default function DonatersTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell align="right"><strong>Membership</strong></TableCell>
            <TableCell align="right"><strong>Validated member</strong></TableCell>
            <TableCell align="right"><strong>Location</strong></TableCell>
            <TableCell align="right"><strong>Number of donations</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.memberShip}</TableCell>
              <TableCell align="right">
                <span style={{color: "green", fontSize: 20}} >
                  {row.isValidated}
                </span>
              </TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.numberOfDonations}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}