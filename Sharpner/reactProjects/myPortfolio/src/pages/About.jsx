import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                px: 2,
            }}
        >
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '1rem',
                    fontFamily: 'Playfair Display, serif',
                }}
            >
                About Me
            </Typography>
            <Typography
                variant="body1"
                component="p"
                sx={{
                    fontSize: { xs: '1rem', md: '1.5rem' },
                    marginLeft: { xs: '1rem', md: '4rem' },
                    marginRight: { xs: '1rem', md: '4rem' },
                }}
            >
                My name is Mariraj, and I hold a Bachelor of Engineering degree in Electrical and Electronics Engineering from Mepco Schlenk Engineering College, Sivakasi. I have further honed my skills by completing a Front End Developer course at the Sharpener Learning Platform. As a dedicated front end developer, I am proficient in JavaScript, HTML, CSS, React, Next.js, and Redux. I am currently seeking a front end developer position where I can leverage my technical expertise and passion for web development to contribute to dynamic and innovative projects.
            </Typography>
        </Box>
    );
};

export default About;
