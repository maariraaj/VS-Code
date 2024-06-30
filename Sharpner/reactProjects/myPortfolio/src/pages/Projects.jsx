import React from 'react';
import { Box, Typography, Link, List, ListItem, ListItemText } from '@mui/material';

const projects = [
    {
        title: "Ecommerce Website",
        github: "https://github.com/maariraaj/ecomWeb",
        deployed: "https://ecom-web-seven.vercel.app/",
        description: "E-commerce website is an application that gives users the option to see different products and add them to the cart, manipulating cart data. User needs to log in to access their cart and users can see the product details as well. React.js library for creating this application, Firebase for storing data and authentiction, React Router for page navigation , GitHub for version control, Vercel for deployment",
        technologies: ["React", "Firebase", "Bootstrap"],
    },
    {
        title: "Mail Box",
        github: "https://github.com/maariraaj/mailbox",
        deployed: "https://mailbox-dusky.vercel.app/",
        description: "Mailbox client is an application where users can send and receive mail. Each user has their own account and users cannot access other users data. Integrated react-draft-wysiwyg editor for composing new email. React.js library for creating this application, Redux for state management, GitHub for version control, FireBase for storing data and authenticaton, Vercel for deployment",
        technologies: ["React", "Redux", "Firebase", "Bootstrap"],
    },
    {
        title: "Expense Tracker",
        github: "https://github.com/maariraaj/expenseTracker",
        deployed: "https://expense-tracker-alpha-wine.vercel.app/",
        description: "Expense Tracker allows user to track their expenses and premium users can get extra benefits like provision to download their expense in an excel format(.csv) and change theme feature. Users expenses data is protected using authentication method. React.js libraray for creating this website, Redux for state management, GitHub for version control , FireBase for storing data and authentication, Vercel for deployment",
        technologies: ["React", "Redux", "Firebase", "Bootstrap"],
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
