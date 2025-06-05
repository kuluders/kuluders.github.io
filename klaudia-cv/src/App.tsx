import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./App.scss";
import Builder from "./components/Builder";
import Data from "./components/Data";
import Drawing from "./components/Drawing.";
import Frontend from "./components/Frontend";
import Intro from "./components/Intro";
import Navbar from "./components/NavBar";

// 1. Create a Theme Context
interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light", // Default theme
  toggleTheme: () => {}, // Dummy function
});

// 2. Create a Theme Provider Component
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.body.className = `theme-${theme}`; // Set the class on the body
    console.log("Theme changed to:", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create a custom hook to use the theme context
const useTheme = () => {
  return useContext(ThemeContext);
};

function App() {
  const builderRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar builderRef={builderRef} introRef={introRef} />
        <div className="view-container">
          <div className="content">
            <Intro ref={introRef} />
            <Frontend />
            <Data />
            <Builder ref={builderRef} />
          </div>
          <Drawing />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

export { ThemeProvider, useTheme };
