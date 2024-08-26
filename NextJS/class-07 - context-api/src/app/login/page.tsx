"use client";


import { ThemeContext } from "@/context/toggletheme"
import Link from "next/link";



export default function Login() {
    const { isDarkTheme, toggleTheme } = ThemeContext()
    return (
        <>
            <h1
                style={{                   
                    backgroundColor: isDarkTheme ?
                        "black" :
                        "white",
                    color: isDarkTheme ?
                        "white" :
                        "black",
                }}>Hello Login</h1>
            <Link href={"/"}>Home</Link>
            <button onClick={toggleTheme}>Change Theme</button>

        </>

    )
}