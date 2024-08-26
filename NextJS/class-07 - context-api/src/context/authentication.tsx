"use client";

import { useContext, createContext, ReactNode, useState } from 'react';

type AuthContextProviderTypes = {
    children: ReactNode
}

type UserType = {
    name: string;
    rollNum: number;
    email: string;
}

const AuthContext = createContext({});
export default function AuthContextProvider({ children }: AuthContextProviderTypes) {
    const [user, setUser] = useState<null | UserType>(null)

    const onAuthStateChange = (userData: UserType) => {
        setUser(userData);
    }

    return (
        <AuthContext.Provider value={{ user, onAuthStateChange }}>
            {children}
        </AuthContext.Provider>
    )
}
export const AuthContextData = () => useContext(AuthContext);



