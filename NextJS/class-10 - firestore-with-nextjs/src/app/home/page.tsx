"use client";

import { app } from "@/firebase/firbaseconfig";
import { auth } from "@/firebase/firebaseauth";
import { db, fetchTodos, saveTodo } from "@/firebase/firebasefirestore";
import { collection, DocumentData, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"

export default function Home() {
    const [todo, setTodo] = useState('');
    const [allTodos, setAllTodos] = useState<DocumentData[]>([]);

    // useEffect(() => {
    //     fetchAllTodos()
    // }, []);

    // const fetchAllTodos = async () => {
    //     let fetchedData: DocumentData[] = await fetchTodos();
    //     console.log(fetchedData, 'inside home');
    //     setAllTodos(fetchedData);
    // }

    useEffect(() => {
        let collectionRef = collection(db, "todos");
        let currentUserUID = auth.currentUser?.uid;
        let condition = where("uid", "==", currentUserUID);
        let q = query(collectionRef, condition);
        let allTodosClone = [...allTodos];

        onSnapshot(q, (querySnapshot) => {
            querySnapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    let todo = change.doc.data();
                    todo.id = change.doc.id;
                    allTodosClone.push(todo);
                    setAllTodos([...allTodosClone])
                }
                if (change.type === "modified") {
                }
                if (change.type === "removed") {
                }
            })
        })

    }, [])



    return (
        <>
            <h1>Hello Home</h1>
            <input type="text"
                value={todo}
                onChange={(e) => { setTodo(e.target.value) }}
            />
            <button onClick={() => {
                saveTodo(todo);
                setTodo('');
            }}>Add New Todo</button>

            {
                allTodos.length > 0 ?
                    allTodos.map(({ todo }) => <h1>{todo}</h1>) :
                    <></>
            }

        </>
    )
}