import React from 'react';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
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
      <Typography variant="h3" component="h1" sx={{ marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>
        Skills
      </Typography>
      <Typography variant="h5" component="p" sx={{ marginBottom: '2rem', fontFamily: 'Playfair Display, serif' }}>
        Frontend Development
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <SkillItem icon={faJs} name="JavaScript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
        <SkillItem icon={faHtml5} name="HTML" link="https://developer.mozilla.org/en-US/docs/Web/HTML" />
        <SkillItem icon={faCss3Alt} name="CSS" link="https://developer.mozilla.org/en-US/docs/Web/CSS" />
        <SkillItem icon={faReact} name="React JS" link="https://reactjs.org/" />
        <SkillItem icon={faReact} name="Next.js" link="https://nextjs.org/" />
        <SkillItem icon={faDatabase} name="Redux" link="https://redux.js.org/" />
      </Box>
    </Box>
  );
};

const SkillItem = ({ icon, name, link }) => (
  <Box sx={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => window.open(link, '_blank')}>
    <FontAwesomeIcon icon={icon} size="4x" style={{ color: getRandomColor() }} />
    <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>{name}</Typography>
  </Box>
);

function getRandomColor() {
  const colors = ['#f44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default Skills;
