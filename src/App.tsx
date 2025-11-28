import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import NoPage from './pages/NoPage';
import AppLayout from './components/layout/AppLayout';
import { theme } from './theme/theme';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
     return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
               <Route path="/" element={<AppLayout/>}>
                 <Route index element={<Home />}/>
                 <Route path="report" element={<Report />}/>
                 <Route path="*" element={<NoPage />}/>
               </Route>
          </Routes>
        </Router>
      </ThemeProvider>
     );
};

export default App;