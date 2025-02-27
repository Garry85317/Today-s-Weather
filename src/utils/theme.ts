import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6C40B5'
    },
    text: {
      primary: '#6C40B5',
      secondary: '#666666'
    },
    background: {
      default: 'url(/img/bg-light.png)',
      paper: 'rgba(255, 255, 255, 0.2)'
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6C40B5'
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff'
    },
    background: {
      default: 'url(/img/bg-dark.png)',
      paper: '#1A1A1A80'
    }
  }
});
