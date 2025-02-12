import React, { useState } from 'react'
import DarkMode from '../hook/DarkMode'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function ToogleMode() {
    const [colorTheme, setColorTheme] = DarkMode();
    const [darkMode, setDarkMode] = useState(colorTheme === "light" ? true : false);

    const toogleDarkMode = (checked) => {
        setColorTheme(colorTheme);
        setDarkMode(checked);
    }
    return (
        <DarkModeSwitch
            checked={darkMode}
            onChange={toogleDarkMode}
            size={40}
            className="dark-mode-switch"
        />
    )
}
