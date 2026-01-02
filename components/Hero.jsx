import React from 'react';
import { Container, Typography, Box, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { PROFILE } from '../utils/constants';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container id="hero" maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', pt: 10 }}>
      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.div variants={fadeInUp}>
          <Typography variant="subtitle1" color="primary" sx={{ fontFamily: 'monospace', mb: 2 }}>
            Hi, my name is
          </Typography>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Typography variant="h1" sx={{ color: 'text.primary' }}>{PROFILE.name}.</Typography>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Typography variant="h1" sx={{ color: 'text.secondary', opacity: 0.7 }}>I build things for the web.</Typography>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Box sx={{ maxWidth: '600px', mt: 4 }}>
            <Typography variant="body1">
              I'm a {PROFILE.role} specializing in building (and occasionally designing) exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products using the MERN stack.
            </Typography>
          </Box>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Box sx={{ mt: 5, display: 'flex', gap: 2 }}>
            <Button variant="outlined" size="large" color="primary" onClick={scrollToProjects}>
              Check out my work
            </Button>
            <IconButton href={PROFILE.github} target="_blank" color="primary"><GitHub /></IconButton>
            <IconButton href={PROFILE.linkedin} target="_blank" color="primary"><LinkedIn /></IconButton>
          </Box>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Hero;