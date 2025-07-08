// ThemeContext.jsx
import React, { createContext, useState, useContext, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const ThemeContext = createContext();

export const useCustomTheme = () => useContext(ThemeContext); // ✅ This is what you're importing

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === 'dark' ? '#121212' : '#f5f5f5',
          },
          text: {
            primary: mode === 'dark' ? '#fff' : '#000',
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
