

import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#64ffda',
      contrastText: '#0a192f',
    },
    secondary: {
      main: '#ccd6f6',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#e6f1ff',
      secondary: '#8892b0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
      color: '#e6f1ff',
    },
    h2: {
      fontWeight: 600,
      fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
      color: '#ccd6f6',
      marginBottom: '1rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#e6f1ff',
    },
    body1: {
      color: '#8892b0',
      lineHeight: 1.7,
      fontSize: '1.1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1rem',
          borderRadius: '4px',
          padding: '10px 20px',
        },
        outlinedPrimary: {
          borderWidth: '1px',
          '&:hover': {
            borderWidth: '1px',
            backgroundColor: 'rgba(100, 255, 218, 0.1)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'monospace',
        }
      }
    }
  },
});

export const darkTheme = createTheme(getDesignTokens('dark'));