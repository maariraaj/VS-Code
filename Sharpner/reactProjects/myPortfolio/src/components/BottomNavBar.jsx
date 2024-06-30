import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const BottomNavBar = () => {
    return (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: '#004d40' }}>
            <Toolbar sx={{ justifyContent: 'center' }}>
                <Typography variant="h6" component="div" sx={{ textAlign: 'center', flexGrow: 1 }}>
                    MARIRAJ PORTFOLIO
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default BottomNavBar;
