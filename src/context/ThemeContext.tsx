import React, { createContext, useState, useRef } from "react";
import { Animated } from "react-native";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  setThemeManually: (mode: "light" | "dark") => {},
  fadeAnim: new Animated.Value(1),
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setThemeManually = (mode: "light" | "dark") => {
    setTheme(mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setThemeManually, fadeAnim }}>
      {children}
    </ThemeContext.Provider>
  );
};
