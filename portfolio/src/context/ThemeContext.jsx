import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = ["purple", "blue", "rose", "dark"];

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "purple";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    if (!themes.includes(newTheme)) return;
    setTheme(newTheme);
  };

  const toggleDarkMode = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "purple" : "dark"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themes,
        changeTheme,
        toggleDarkMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}

export default ThemeProvider;