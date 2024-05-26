import React from "react";
import { useTheme } from "../context/ThemeContext";

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
    )
}
