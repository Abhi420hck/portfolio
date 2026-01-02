import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, IconButton, Button, CircularProgress } from '@mui/material';
import { GitHub, Launch, Storage } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { PROFILE } from '../utils/constants';

const OtherProjects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
  "https://api.github.com/users/Abhi420hck/repos?sort=updated&per_page=6"
);
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        } else {
          throw new Error("Failed to fetch");
        }
      } catch (error) {
        setRepos([
          { id: 101, name: "mern-auth-boilerplate", description: "Secure authentication template using JWT.", html_url: "[https://github.com/Abhi420hck](https://github.com/Abhi420hck)", language: "JavaScript" },
          { id: 102, name: "react-task-tracker", description: "Simple task management app with React hooks.", html_url: "[https://github.com/Abhi420hck](https://github.com/Abhi420hck)", language: "React" },
          { id: 103, name: "node-api-starter", description: "Express server setup with best practices.", html_url: "[https://github.com/Abhi420hck](https://github.com/Abhi420hck)", language: "Node" },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ pb: 15 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
        Other Noteworthy Projects
      </Typography>
      <Typography variant="body1" align="center" color="primary" sx={{ mb: 6, fontFamily: 'monospace' }}>
        view the archive
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress color="primary" /></Box>
      ) : (
        <Grid container spacing={3}>
          {repos.slice(0, 6).map((repo) => (
            <Grid item xs={12} md={4} key={repo.id}>
              <motion.div whileHover={{ y: -7 }}>
                <Card sx={{ 
                  height: '100%', 
                  bgcolor: '#112240', 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
                  cursor: 'pointer'
                }} onClick={() => window.open(repo.html_url, '_blank')}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                      <Storage color="primary" fontSize="large" />
                      <Box>
                        <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                          <GitHub />
                        </IconButton>
                        <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                          <Launch />
                        </IconButton>
                      </Box>
                    </Box>
                    <Typography variant="h6" color="text.primary" gutterBottom sx={{ fontWeight: 600 }}>
                      {repo.name.replace(/-/g, ' ')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {repo.description ? repo.description.slice(0, 100) + '...' : "Check out this project on my GitHub to see the code and documentation."}
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ pt: 0 }}>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'text.secondary' }}>
                      {repo.language || "JavaScript"}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
      
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Button variant="outlined" color="primary" href={PROFILE.github} target="_blank">
          Show More on GitHub
        </Button>
      </Box>
    </Container>
  );
};

export default OtherProjects;
