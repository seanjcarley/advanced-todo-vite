import { AppBar, Avatar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const Navbar = ({onMenuClick}) => {
    const username = localStorage.getItem('user') || 'Student';
    const avatarUrl = `https://i.pravatar.cc/150?u=${username}`;
    
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton edge='start' color='inherit' onClick={onMenuClick}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' sx={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
                <Tooltip title={'Username'}>
                    {/* <Avatar>{username.charAt(0).toUpperCase()}</Avatar> */}
                    <Avatar src={avatarUrl} />
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
