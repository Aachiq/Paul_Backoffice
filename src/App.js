import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Routing from './Routing';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <BrowserRouter>
       <Routing/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
