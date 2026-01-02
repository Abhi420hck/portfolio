import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { PROFILE } from '../utils/constants';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = () => {
  return (
    <Container id="contact" maxWidth="md" sx={{ py: 15, textAlign: 'center' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Typography variant="subtitle1" color="primary" sx={{ fontFamily: 'monospace', mb: 2 }}>
          04. What's Next?
        </Typography>
        <Typography variant="h2" color="text.primary" sx={{ mb: 3 }}>
          Get In Touch
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', mx: 'auto', mb: 6 }}>
          I am currently looking for new opportunities as a MERN Stack Developer. Whether you have a question or just want to say hi, my inbox is always open!
        </Typography>
        <Button 
          variant="outlined" 
          size="large" 
          color="primary" 
          href={PROFILE.email}
          sx={{ px: 5, py: 2 }}
        >
          Say Hello
        </Button>
      </motion.div>
    </Container>
  );
};

export default Contact;
