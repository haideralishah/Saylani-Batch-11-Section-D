"use client";

import { saveTodo } from "@/firebase/firebasefirestore";
import { useState } from "react"


export default function Home() {
    const [todo, setTodo] = useState('')
    return (
        <>
            <h1>Hello Home</h1>
            <input type="text"
                value={todo}
                onChange={(e) => { setTodo(e.target.value) }}
            />
            <button onClick={() => {
                saveTodo(todo)
            }}>Add New Todo</button>
        </>
    )
}