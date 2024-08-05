"use client";

import AuthForm from "@/components/authform";
import Link from "next/link";

export default function Signup() {
  const signup = (email: string, password: string) => {
    console.log("Signup Function", email, password);
  };
  return (
    <>
      <AuthForm 
        btnFunc={signup}
        btnLabel={"Signup"} 
    />
      <Link href={"./login"}>
        <p>Already have an account? Login here.</p>
      </Link>
    </>
  );
}
