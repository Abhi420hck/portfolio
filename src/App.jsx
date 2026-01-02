import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, Fab } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { KeyboardArrowUp } from '@mui/icons-material';

// Import Theme
import { darkTheme } from '../theme/theme';

// Import Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import OtherProjects from '../components/OtherProjects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowButton(true);
      else setShowButton(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <OtherProjects />
          <Contact />
        </main>
        
        <Footer />

        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: 'fixed', bottom: 30, right: 30, zIndex: 10 }}
            >
              <Fab color="primary" size="small" onClick={scrollToTop} aria-label="scroll back to top">
                <KeyboardArrowUp />
              </Fab>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </ThemeProvider>
  );
};

export default App;