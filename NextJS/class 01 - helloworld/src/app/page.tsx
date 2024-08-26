'use client';


import HelloWorld from "./helloworld";
import StudentList from "./studentlist";

export default function Home() {
  const signup = ()=>{
    console.log("This is signup func.");
  }
  const login = ()=>{
    console.log("This is Login func.");
  }
  const forgetPassword = ()=>{
    console.log("This is Forget Password func.");
  }

  return (
    <>
      <HelloWorld
        greet="Assalamuaalikum"
        message="The quick brown fox jumps over the lazy dog."
        label="Signup"
        btnHandler={signup}
      />

      <HelloWorld
        greet="Hello"
        message="How are you?"
        label="Login"
        btnHandler={login}
      />

      <HelloWorld
        greet="Eid Mubarak"
        message="Eidi lete"
        label="Forget Password"
        btnHandler={forgetPassword}

      />


      <StudentList />
    </>
  )
}