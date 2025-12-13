import { createContext } from "react";
type ThemeContextType = {
  theme: string;
};

const ThemeContext = createContext<ThemeContextType>({ theme: "dark" });
export { ThemeContext };
