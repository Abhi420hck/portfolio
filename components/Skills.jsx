import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { SKILLS } from '../utils/constants';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Skills = () => {
  return (
    <Box sx={{ bgcolor: '#112240', py: 10 }} id="skills">
      <Container maxWidth="lg">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary' }}>
              <span style={{ color: '#64ffda', fontFamily: 'monospace', marginRight: '10px', fontSize: '1.5rem' }}>02.</span> 
              Technical Skills
            </Typography>
            <Box sx={{ flexGrow: 1, height: '1px', bgcolor: '#233554', ml: 3 }} />
          </Box>

          <Grid container spacing={4}>
            {SKILLS.map((category, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card sx={{ 
                  height: '100%', 
                  bgcolor: '#0a192f', 
                  boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
                  border: '1px solid #233554',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-5px)' }
                }}>
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{category.icon}</Box>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                      {category.category}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mt: 2 }}>
                      {category.skills.map((skill) => (
                        <Chip 
                          key={skill} 
                          label={skill} 
                          size="small"
                          sx={{ 
                            bgcolor: 'rgba(100, 255, 218, 0.1)', 
                            color: 'primary.main',
                            border: '1px solid rgba(100, 255, 218, 0.1)'
                          }} 
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
