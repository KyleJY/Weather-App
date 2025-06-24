import { useState } from "react";
import { createContext, useEffect } from "react";

const ThemeContext = createContext();
const THEME_KEY = "theme";
function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  const saveThemeToLocalStorage = (theme) => {
    localStorage.setItem(THEME_KEY, theme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme !== null) {
      setDark(savedTheme === "true");
      return;
    }

    const isSystemThemeDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDark(isSystemThemeDark === true);
    console.log(isSystemThemeDark);
  }, []);
  return (
    <ThemeContext.Provider value={{ dark, setDark, saveThemeToLocalStorage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
export default ThemeContext;
