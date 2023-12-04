import React from 'react';
import './App.css';
import Header from './components/header';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DataTable from './components/table';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className='table-wrap'>
        <div className='text-n-button'>
          <h2 className='title'>Users</h2>
          <Button component="label" variant="contained" startIcon={<AddIcon />} 
            sx={{textTransform:'capitalize',
            bgcolor:'#000717',
            height: 36,
          }}
          >
            Add user
          </Button>
        </div>
        
          <div className='table'>
            
          <DataTable />
          </div>
          
       
      </div>
    </div>
  );
}

export default App;
