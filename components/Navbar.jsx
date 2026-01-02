import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Box, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, Close, Description } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '../utils/constants';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Work", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (id) => {
    scrollToSection(id);
    if (isMobile) setMobileOpen(false);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'rgba(10, 25, 47, 0.85)', backdropFilter: 'blur(10px)', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: 0 }}>
          <Typography 
            variant="h6" 
            color="primary" 
            sx={{ fontWeight: 'bold', fontFamily: 'monospace', cursor: 'pointer' }}
            onClick={() => scrollToSection('hero')}
          >
            &lt;KA /&gt;
          </Typography>

          {!isMobile && (
            <Box>
              {navLinks.map((link, index) => (
                <Button 
                  key={index} 
                  onClick={() => handleNavClick(link.id)}
                  sx={{ color: 'text.primary', ml: 2, '&:hover': { color: 'primary.main' } }}
                >
                  <span style={{ color: '#64ffda', marginRight: '5px' }}>0{index + 1}.</span> {link.name}
                </Button>
              ))}
              <Button 
                variant="outlined" 
                color="primary" 
                href={PROFILE.resume} 
                download
                sx={{ ml: 3 }}
                startIcon={<Description />}
              >
                Resume
              </Button>
            </Box>
          )}

          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <Close /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>

        <AnimatePresence>
          {isMobile && mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{ overflow: 'hidden', background: '#112240' }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, alignItems: 'center' }}>
                {navLinks.map((link) => (
                  <Button key={link.name} onClick={() => handleNavClick(link.id)} sx={{ my: 1, width: '100%' }}>
                    {link.name}
                  </Button>
                ))}
                <Button variant="outlined" color="primary" href={PROFILE.resume} download sx={{ mt: 2, width: '100%' }}>
                  Resume
                </Button>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </AppBar>
  );
};

export default Navbar;