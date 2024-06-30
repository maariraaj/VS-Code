import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Skills', path: '/skills' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: '#009688', borderBottom: '1px solid #009688' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <span role="img" aria-label="star">⭐</span>
                        MY PORTFOLIO
                        <span role="img" aria-label="star">⭐</span>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.title}
                                to={link.path}
                                style={({ isActive }) => ({
                                    color: isActive ? '#fff' : '#004d40',
                                    backgroundColor: isActive ? '#004d40' : 'transparent',
                                    textDecoration: 'none',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '4px',
                                    margin: '0 0.5rem',
                                })}
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </Box>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: 'block', md: 'none' } }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ '& .MuiDrawer-paper': { width: '250px', bgcolor: '#009688', color: '#fff' } }}
            >
                <Box
                    sx={{ width: 250, textAlign: 'center', bgcolor: '#009688', color: '#fff', height: '100%' }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <IconButton sx={{ color: '#fff', textAlign: 'right', padding: '1rem' }} onClick={toggleDrawer(false)}>
                        <CloseIcon />
                    </IconButton>
                    <List>
                        {navLinks.map((link) => (
                            <ListItem button key={link.title} component={NavLink} to={link.path}>
                                <ListItemText
                                    primary={link.title}
                                    sx={{ textAlign: 'center', color: 'inherit' }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default NavBar;
