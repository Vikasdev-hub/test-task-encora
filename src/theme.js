import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f6f8fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#24292e',
      secondary: '#586069',
    },
    primary: {
      main: '#0366d6',
    },
    secondary: {
      main: '#28a745', 
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;
