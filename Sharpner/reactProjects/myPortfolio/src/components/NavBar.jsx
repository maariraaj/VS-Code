import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const NavBar = () => {
    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? 'white' : 'white',
        backgroundColor: isActive ? '#004d40' : 'transparent',
        textDecoration: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        transition: 'background-color 0.3s ease',
        display: 'block',
    });

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#009688' }}>
            <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton edge="start" color="inherit" aria-label="logo">
                        <StarIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        MY PORTFOLIO
                        <StarIcon />
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <NavLink to="/" style={navLinkStyle}>Home</NavLink>
                    <NavLink to="/about" style={navLinkStyle}>About</NavLink>
                    <NavLink to="/skills" style={navLinkStyle}>Skills</NavLink>
                    <NavLink to="/projects" style={navLinkStyle}>Projects</NavLink>
                    <NavLink to="/contact" style={navLinkStyle}>Contact</NavLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
