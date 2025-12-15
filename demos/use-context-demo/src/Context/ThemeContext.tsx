import { createContext } from "react";

// Define the type for the theme context, including the current theme and a function to toggle it
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

// Create a context for managing theme state across the application
// Default values are provided for when no provider is present
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export { ThemeContext };
