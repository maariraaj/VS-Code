import React from 'react';
import { Box, Typography, Link, List, ListItem, ListItemText } from '@mui/material';

const projects = [
    {
        title: "Ecommerce Website",
        github: "https://github.com/maariraaj/ecomWeb",
        deployed: "https://ecom-web-seven.vercel.app/",
        description: "This is the shoping website.",
        technologies: ["React", "Firebase", "Bootstrap"],
    },
    {
        title: "Mail Box",
        github: "https://github.com/maariraaj/mailbox",
        deployed: "https://mailbox-dusky.vercel.app/",
        description: "This is the mail box webiste to send and receive emails",
        technologies: ["React", "Redux", "Firebase", "Bootstrap"],
    },
    {
        title: "Expense Tracker",
        github: "https://github.com/maariraaj/expenseTracker",
        deployed: "https://expense-tracker-alpha-wine.vercel.app/",
        description: "This is the expense tracker website to track expenses.",
        technologies: ["React", "Firebase", "Bootstrap"],
    },
];

const Projects = () => {
    return (
        <Box
            sx={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typography variant="h3" component="h1" sx={{ marginBottom: '2rem', fontFamily: 'Playfair Display, serif' }}>
                Projects
            </Typography>
            {projects.map((project, index) => (
                <Box
                    key={index}
                    sx={{
                        marginBottom: '2rem',
                        padding: '1.5rem',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        width: '100%',
                        maxWidth: '600px',
                        textAlign: 'left',
                    }}
                >
                    <Typography variant="h5" component="h2" sx={{ marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>
                        {project.title}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                        {project.description}
                    </Typography>
                    <Typography variant="h6" component="h3" sx={{ marginBottom: '0.5rem' }}>
                        Technologies Used:
                    </Typography>
                    <List>
                        {project.technologies.map((tech, idx) => (
                            <ListItem key={idx} sx={{ padding: '0' }}>
                                <ListItemText primary={tech} />
                            </ListItem>
                        ))}
                    </List>
                    <Link href={project.github} target="_blank" rel="noopener" sx={{ display: 'block', marginBottom: '0.5rem' }}>
                        GitHub Repository
                    </Link>
                    <Link href={project.deployed} target="_blank" rel="noopener" sx={{ display: 'block' }}>
                        Live Demo
                    </Link>
                </Box>
            ))}
        </Box>
    );
};

export default Projects;
