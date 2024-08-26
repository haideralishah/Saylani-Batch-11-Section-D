"use client";


import { AuthContextData } from "@/context/authentication"
import { useRouter } from "next/navigation";


export default function Home() {
    const { user } = AuthContextData()
    const router = useRouter();
    if (!user) {
        router.push("/login");
    }
    // const { name, rollNum, email } = user;

    return (
        <div>
            <h1>Welcome {user?.name}</h1>
            <p>You are authenticated with {user?.email}.</p>
            <p>Your roll number is {user?.rollNum}</p>
        </div>

    )
}