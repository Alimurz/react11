import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { IconButton } from '@mui/material';
import styles from './styles.module.scss'
export default function Input() {
  return (
<div className={styles['table']}>
        <FormControl fullWidth sx={{ m: 1 }}>
    <InputLabel htmlFor="outlined-adornment-amount">Search user</InputLabel>
    <OutlinedInput
      id="outlined-adornment-amount"
      startAdornment={<SearchIcon />}
      label="Search user"
    />
  </FormControl>

<IconButton
size="large"
aria-label="show 2 new notifications"
color="inherit"
>
  <FilterListIcon />

</IconButton>
    </div>
  );
}