

import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import profile from '../public/profile.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
  return (
    <Container id="about" maxWidth="md" sx={{ py: 10 }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#64ffda', fontFamily: 'monospace', marginRight: '10px', fontSize: '1.5rem' }}>01.</span> 
            About Me
          </Typography>
          <Box sx={{ flexGrow: 1, height: '1px', bgcolor: '#233554', ml: 3 }} />
        </Box>

        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" paragraph>
              Hello! My name is Abhishek and I enjoy creating things that live on the internet. My interest in web development started when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
            </Typography>
            <Typography variant="body1" paragraph>
              Fast-forward to today, I’ve had the privilege of working on various projects, specializing in the **MERN Stack**. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </Typography>
            <Typography variant="body1">
              Here are a few technologies I've been working with recently:
            </Typography>
            
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {['JavaScript (ES6+)', 'React', 'Node.js', 'MongoDB', 'Material UI', 'Express', 'Django'].map(tech => (
                <Grid item xs={6} key={tech}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64ffda', marginRight: '10px' }}>▹</span>
                    <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>{tech}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          <Grid item xs={12} md={4}>
            {/* Styled Image Wrapper */}
            <Box sx={{ 
              position: 'relative',
              '&:hover .wrapper': { transform: 'translate(-5px, -5px)', boxShadow: '10px 10px 0 0 #64ffda' },
              '&:hover .img-overlay': { opacity: 0 }
            }}>
              <Box className="wrapper" sx={{ 
                width: '100%', 
                height: '300px', 
                bgcolor: '#64ffda', 
                borderRadius: '4px',
                transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                 {/* Make sure profile.jpg is in your public folder */}
                 <Box 
                    component="img"
                    src="/profile.jpg" 
                   onError={(e) => {
                      e.target.src = profile
                    }}
                    alt="Profile"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', mixBlendMode: 'multiply' }}
                 />
                 <Box className="img-overlay" sx={{
                   position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                   bgcolor: 'rgba(100, 255, 218, 0.3)', transition: 'all 0.25s'
                 }}/>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About;