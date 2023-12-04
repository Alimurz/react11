import React from 'react';
import { Avatar } from '@mui/material';
import AvatarJpg from './../../icons/456322.webp'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import BritainFlag from '../../icons/Flag_of_Great_Britain_(17071800).svg.png'
import Badge from '@mui/material/Badge';

import SearchIcon from '@mui/icons-material/Search';

import NotificationsIcon from '@mui/icons-material/Notifications';

import Styles from './style.module.scss'

function Header() {
  const menuId = 'primary-search-account-menu';
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
           <SearchIcon />
          </IconButton>
        
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" className='flagwrap'>
                <img src={BritainFlag}  className={Styles['flag']} width={40} alt='flag'/>
             </IconButton>
            <IconButton
              size="large"
              aria-label="show 2 new notifications"
              color="inherit"
            >
              <Badge badgeContent={2} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar
              src={AvatarJpg}
              sx={40}
              alt='avatar'/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
            </IconButton>
          </Box>
        </Toolbar>
    </Box>
  );
}
export default Header;