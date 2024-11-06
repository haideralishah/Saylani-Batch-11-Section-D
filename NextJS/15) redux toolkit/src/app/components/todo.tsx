"use client"
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addTodo } from '@/lib/slices/todoSlice';
import React, { useState } from 'react'


export default function Todo() {
    const [todo, setTodo] = useState('');
    const dispatch = useAppDispatch();
    const todos = useAppSelector(state => state?.todos?.todos)
    const add = () => {
        dispatch(addTodo(todo))
        setTodo('')
    }
    return (
        <div>
            <input type="text" value={todo} onChange={(e) => { setTodo(e?.target?.value) }} />
            <button onClick={add}>Add Todo</button>
            <ul>
                {
                    todos?.map((text: string, index: number) => {
                        return <li key={index}>{text}</li>
                    })
                }

            </ul>
        </div>
    )
}