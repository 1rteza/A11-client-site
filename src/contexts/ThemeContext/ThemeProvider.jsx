import { useState, useEffect, createContext } from "react";
import { ThemeContext } from "./ThemeContext";


const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false); 

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
