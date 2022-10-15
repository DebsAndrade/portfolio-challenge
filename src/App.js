import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./utils/Themes";
import { GlobalStyle } from "./styles/GlobalStyle";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
