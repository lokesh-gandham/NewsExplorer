// src/App.js
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArticleDetails from './pages/ArticleDetails';
import SearchResults from './pages/SearchResults';
import Home from './pages/home';
import { useCustomTheme } from './context/ThemeContext';
import Register from './pages/Register';
import Login from './pages/Login';
import { Box } from '@mui/material';

function App() {
  const { mode } = useCustomTheme();
   const location = useLocation();
    const hideNavbarRoutes = ['/login', '/register'];

  // Determine whether to show or hide Navbar
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div style={{ backgroundColor: mode === 'dark' ? '#121212' : '#f5f5f5', color: mode === 'dark' ? '#fff' : '#000', minHeight: '100vh' }}>
       {!hideNavbar && <Navbar />}
     { !hideNavbar && <Box sx={{ mt: 3 }}/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/article" element={<ArticleDetails />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
