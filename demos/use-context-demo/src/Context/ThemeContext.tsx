import { createContext } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};


const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
});

export { ThemeContext };
