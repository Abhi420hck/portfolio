import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { PROFILE } from '../utils/constants';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 3, bgcolor: '#0a192f' }}>
       <Box sx={{ mb: 2 }}>
         <IconButton href={PROFILE.github} target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}><GitHub /></IconButton>
         <IconButton href={PROFILE.linkedin} target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}><LinkedIn /></IconButton>
         <IconButton href={PROFILE.email} target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}><Email /></IconButton>
       </Box>
       <Typography variant="body2" sx={{ fontFamily: 'monospace', color: 'text.secondary', fontSize: '12px' }}>
         Designed & Built by Korepilla Abhishek
       </Typography>
    </Box>
  );
};

export default Footer;
