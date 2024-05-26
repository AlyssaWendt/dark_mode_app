import React from "react";
import { useTheme } from "../context/ThemeContext";
import SunIcon from '../assets/sun.svg'
import MoonIcon from '../assets/moon.svg'

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="toggle-switch">
            <input
                type="checkbox"
                id="theme-toggle"
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <label htmlFor="theme-toggle" className="switch">
                <img src={SunIcon} alt="Light mode" className="icon sun-icon" />
                <img src={MoonIcon} alt="Dark mode" className="icon moon-icon" />
            </label>
        </div>
    )
}
