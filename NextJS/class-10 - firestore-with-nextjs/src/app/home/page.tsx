"use client";

import { fetchTodos, saveTodo } from "@/firebase/firebasefirestore";
import { useEffect, useState } from "react"


export default function Home() {
    const [todo, setTodo] = useState('');

    useEffect(()=>{
        fetchTodos();
    }, []);    

    
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