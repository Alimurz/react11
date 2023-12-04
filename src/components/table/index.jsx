import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styles from './styles.module.scss'
import Input from '../input';

const columns = [
  { field: 'id', headerName: 'Name',},
  { field: 'Company', headerName: 'Company',},
  { field: 'Role', headerName: 'Role',  },
  {
    field: 'Verified',
    headerName: 'Verified',
    type: 'text',
  },
  {
    field: 'Status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
  },
];

const rows = [
  { id: 'Addrien', Role: 'Backend Developer', Company: 'Runolfsson LLC', Verified: 'No', Status: 'Active'},
  { id: 'Becky', Role: 'Leader', Company: 'Fadel-Torp', Verified: 'No', Status: 'Active' },
  { id: 'Colin', Role: 'UI Designer', Company: 'Spencer, Towne and Bogan', Verified: 'Yes', Status: 'Banned' },
  { id: 'Dan', Role: 'Full Stack Designer', Company: 'Cummerata-Casper', Verified: 'Yes', Status: 'Active' },
  { id: 'Dennis', Role: 'UI/UX Designer', Company: 'Auer, Watsica ans Roberts', Verified: 'Yes', Status: 'Active'  },
];

export default function DataTable() {
  return (
    <div className={styles['table']}>
        <Input />
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}