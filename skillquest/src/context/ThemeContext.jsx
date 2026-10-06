import { createContext } from "react";
import { useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        );
    }
    useEffect(() => {
        document.body.setAttribute("data-bs-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{ theme, toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;