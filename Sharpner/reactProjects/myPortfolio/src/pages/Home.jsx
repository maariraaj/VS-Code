import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontFamily: 'Arial, sans-serif',
                px: 2,
            }}
        >
            <Typography variant="body1" component="p" sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>
                Hello, I am
            </Typography>
            <Typography
                variant="h2"
                component="h1"
                sx={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: { xs: '2rem', md: '3.5rem' },
                    margin: '0.5rem 0',
                }}
            >
                Mariraj
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>
                A Full Stack Developer
            </Typography>
        </Box>
    );
};

export default Home;
