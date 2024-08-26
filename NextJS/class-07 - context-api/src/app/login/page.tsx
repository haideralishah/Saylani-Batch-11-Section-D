"use client";


import { AuthContextData } from "@/context/authentication";
import { ThemeContext } from "@/context/toggletheme"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";




export default function Login() {
    const { isDarkTheme, toggleTheme } = ThemeContext();
    const { user, onAuthStateChange } = AuthContextData();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();



    const AuthAPICall = (email: string, password: string) => {
        return {
            email,
            name: email.split("@")[0],
            rollNum: Math.floor(Math.random() * 99999)
        }
    }

    const login = () => {
        let user = AuthAPICall(email, password);
        onAuthStateChange(user);
        router.push('/home');
    }

    useEffect(() => {
        console.log(user, 'inside use effect function');
    }, [user])

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

            <label htmlFor="email">
                Email:
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
            </label>
            <br />
            <label htmlFor="password">
                Password:
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
            </label>
            <br />
            <button onClick={login}>Login</button>
            <br />            <br />            <br />

            <Link href={"/"}>Home</Link>
            <button onClick={toggleTheme}>Change Theme</button>

        </>

    )
}