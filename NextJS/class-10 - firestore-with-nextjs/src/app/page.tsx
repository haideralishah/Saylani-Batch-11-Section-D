"use client";

import { loginWithEmailPassword, signupWithEmailPassword } from "@/firebase/firebaseauth";
import { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// import { app } from "@/firebase/firbaseconfig";


export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rollNum, setRollNum] = useState("");
  const [studentName, setStudentName] = useState("");


  // const auth = getAuth(app);

  // const signup = async () => {
  //   try{
  //     let userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //   }catch(e){
  //     console.log(e)
  //   }


  // }

  return (
    <>
      <h1>Hello Auth</h1>
      Roll Number:   <input type="email"
        value={rollNum}
        onChange={(e) => { setRollNum(e.target.value) }}
      /><br />

      Student Name:   <input type="email"
        value={studentName}
        onChange={(e) => { setStudentName(e.target.value) }}
      /><br />


      Email:   <input type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
      /><br />

      Password:   <input type="password"
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
      />

      <button onClick={
        () => { signupWithEmailPassword(email, password, rollNum, studentName) }

        // signup

      }
      >
        Signup
      </button>

      <button onClick={
        () => { loginWithEmailPassword(email, password) }}
      >
        Login
      </button>

    </>
  );
}
