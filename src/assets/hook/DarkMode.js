import { useState, useEffect } from "react";

export default function DarkMode() {

    const [darkMode, setDarkMode] = useState(localStorage.darkMode);
    const colorTheme = darkMode === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(darkMode);

        localStorage.setItem("darkMode", darkMode);
    }
        , [darkMode, colorTheme]);
    return (
        [colorTheme, setDarkMode]
    )
}


