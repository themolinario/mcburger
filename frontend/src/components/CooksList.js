import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";

function createData(firstName, lastName) {
  return { firstName, lastName};
}

const rows = [
  createData('Luca', 'Molinari'),
  createData('Angelo', 'Ladisa'),
];

export default function CooksList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome Cuoco</TableCell>
            <TableCell >Cognome</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.firstName}
            >
              <TableCell>
                {row.firstName}
              </TableCell>
              <TableCell >{row.lastName}</TableCell>
              <TableCell>
                <Button variant="contained" color="error">Rimuovi</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}