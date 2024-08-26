"use client";

import { createContext, ReactPortal, useContext, useState } from "react";

const TgleThmContext = createContext({});

export default function ToggleThmeContext(
    { children }: { children: React.ReactNode }
) {

    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <TgleThmContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </TgleThmContext.Provider>
    )

}


export const ThemeContext = () => useContext(TgleThmContext);