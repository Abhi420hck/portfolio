import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { FEATURED_PROJECTS } from '../utils/constants';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Projects = () => {
  return (
    <Container id="projects" maxWidth="lg" sx={{ py: 10 }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary' }}>
            <span style={{ color: '#64ffda', fontFamily: 'monospace', marginRight: '10px', fontSize: '1.5rem' }}>03.</span> 
            Some Things I've Built
          </Typography>
          <Box sx={{ flexGrow: 1, height: '1px', bgcolor: '#233554', ml: 3 }} />
        </Box>

        <Grid container spacing={4}>
          {FEATURED_PROJECTS.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card sx={{ 
                  height: '100%', 
                  bgcolor: '#112240', 
                  boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  {/* Project Image */}
                  <Box sx={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                    <Box 
                      className="overlay"
                      sx={{ 
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                        bgcolor: 'rgba(10, 25, 47, 0.3)', 
                        transition: 'opacity 0.3s',
                        zIndex: 1,
                        '&:hover': { opacity: 0 }
                      }}
                    />
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{ 
                        height: '100%', 
                        width: '100%', 
                        objectFit: 'cover',
                        filter: 'grayscale(20%) contrast(1.1)',
                        transition: 'transform 0.3s, filter 0.3s',
                        '&:hover': { transform: 'scale(1.05)', filter: 'none' }
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                       <Typography variant="overline" color="primary" sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
                         Featured Project
                       </Typography>
                       <Box>
                         <IconButton href={project.github} target="_blank" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                           <GitHub fontSize="small" />
                         </IconButton>
                         {project.live !== "#" && (
                           <IconButton href={project.live} target="_blank" size="small" sx={{ color: 'text.secondary', ml: 1, '&:hover': { color: 'primary.main' } }}>
                             <Launch fontSize="small" />
                           </IconButton>
                         )}
                       </Box>
                    </Box>
                    
                    <Typography variant="h5" color="text.primary" gutterBottom sx={{ fontWeight: 700 }}>
                      {project.title}
                    </Typography>

                    <Box sx={{ 
                      bgcolor: 'rgba(2, 12, 27, 0.5)', 
                      p: 2, 
                      borderRadius: 1, 
                      my: 2,
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'justify', lineHeight: 1.6 }}>
                        {project.description}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                      {project.tech.map(t => (
                        <Typography key={t} variant="caption" sx={{ fontFamily: 'monospace', color: 'primary.main', opacity: 0.8 }}>
                           #{t}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects;