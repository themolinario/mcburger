import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function createData(orderNumber, products) {
  return { orderNumber, products};
}

const rows = [
  createData(1, ['Molinari',' ', 'Molinari']),
  createData(2, 'Ladisa'),
];

export default function CooksOrdersTable() {
  const [state, setState] = React.useState('Uncompleted');
  let style = {color: 'white'};
  if (state === 'Uncompleted') {
    style = {
      color: 'white',
      backgroundColor: 'red'
    }
  } else if (state === 'Preparing'){
    style = {
      color: 'white',
      backgroundColor: 'grey'
    }
  } else if (state === 'Completed'){
    style = {
      color: 'white',
      backgroundColor: 'green'
    }
  }

  const handleChange = (event) => {
    setState(event.target.value);

  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Numero Ordine</TableCell>
            <TableCell >Prodotti</TableCell>
            <TableCell>Stato</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.orderNumber}
            >
              <TableCell>
                {row.orderNumber}
              </TableCell>
              <TableCell >{row.products}</TableCell>
              <TableCell>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    label="Stato"
                    onChange={handleChange}
                    style={style}
                    >
                    <MenuItem value='Uncompleted'>Da Cominciare</MenuItem>
                    <MenuItem value='Preparing' >In Preparazione</MenuItem>
                    <MenuItem value='Completed' >Completato</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}