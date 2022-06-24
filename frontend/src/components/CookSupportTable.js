import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Problem', headerName: 'Problem', width: 300 },

];

const rows = [
  { id: 1, Problem: 'Prodotto Esaurito'},
  { id: 2, Problem: 'Ritardo nel servizio'},
  { id: 3, Problem: 'Errore nel servizio'}
];

export default function CookSupportTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}