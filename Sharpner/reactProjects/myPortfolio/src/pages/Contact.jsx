import React from 'react';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWhatsapp, faLinkedin, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typography variant="h3" component="h1" sx={{ marginBottom: '2rem', fontFamily: 'Playfair Display, serif' }}>
                Contact Me
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <ContactItem icon={faGithub} color="#181717" text="GitHub" link="https://github.com/maariraaj" />
                <ContactItem icon={faWhatsapp} color="#25D366" text="WhatsApp" link="https://wa.me/+919488455867" />
                <ContactItem icon={faLinkedin} color="#0077B5" text="LinkedIn" link="https://www.linkedin.com/in/marirajb/" />
                <ContactItem icon={faMicrosoft} color="#00A4EF" text="Hotmail" link="mailto:marirajb@outlook.com" />
            </Box>
        </Box>
    );
};

const ContactItem = ({ icon, color, text, link }) => (
    <Box sx={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => window.open(link, '_blank')}>
        <FontAwesomeIcon icon={icon} size="3x" style={{ color }} />
        <Typography variant="h6" sx={{ marginTop: '0.5rem' }}>{text}</Typography>
    </Box>
);

export default Contact;
