"use client";

import { app } from "@/firebase/firbaseconfig";
import { auth } from "@/firebase/firebaseauth";
import { db, fetchTodos, saveTodo } from "@/firebase/firebasefirestore";
import { onAuthStateChanged } from "firebase/auth";
import { collection, DocumentData, onSnapshot, query, Unsubscribe, where } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react"
import style from "./home.module.css";
export default function Home() {
    const [todo, setTodo] = useState('');
    const [allTodos, setAllTodos] = useState<DocumentData[]>([]);


    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             fetchAllTodos();
    //         }
    //     })
    // }, []);

    // const fetchAllTodos = async () => {
    //     let fetchedData: DocumentData[] = await fetchTodos();
    //     console.log(fetchedData, 'inside home');
    //     setAllTodos(fetchedData);
    // }

    useEffect(() => {
        let detachOnAuthListiner = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchTodosRealtime();
            }
        })

        return () => {
            if (readTodosRealtime) {
                console.log("Component Unmount.");
                readTodosRealtime();
                detachOnAuthListiner();
            }
        }

    }, [])

    let readTodosRealtime: Unsubscribe;

    const fetchTodosRealtime = () => {
        let collectionRef = collection(db, "todos");
        let currentUserUID = auth.currentUser?.uid;
        let condition = where("uid", "==", currentUserUID);
        let q = query(collectionRef, condition);
        // let allTodosClone = [...allTodos];

        readTodosRealtime = onSnapshot(q, (querySnapshot) => {
         
            let userTodo = querySnapshot.docs.map((todoDoc) => ({
                ...todoDoc.data(),
                id: todoDoc.id

            }))
            setAllTodos(userTodo);
            
            // console.log(userTodo);

            // querySnapshot.docChanges().forEach((change) => {
            //     if (change.type === "added") {
            //         let todo = change.doc.data();
            //         todo.id = change.doc.id;
            //         allTodosClone.push(todo);
            //         setAllTodos([...allTodosClone])
            //     }
            //     if (change.type === "modified") {
            //         console.log('data modified');
            //     }
            //     if (change.type === "removed") {
            //     }
            // })
        })



    }
    const basicStyle = {
        color: todo ? "red" : "blue",
        backgroundColor: "yellow"
    }
    const advancedStyle = {
        fontSize: "72px"
    }

    return (
        <>
            <Link href={"./about"}>About</Link>
            <h1
                className={`m-8 p-8 text-red`}
            // style={{ ...basicStyle, ...advancedStyle }}
            >Hello Home</h1>
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

