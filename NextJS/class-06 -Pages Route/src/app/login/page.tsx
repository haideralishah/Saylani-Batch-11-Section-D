"use client";

import AuthForm from "@/components/authform";
import Link from "next/link";

export default function Login() {
  const login = (email: string, password: string) => {
    console.log("Login Function", email, password);
  };

  return (
    <>
      <AuthForm 
        btnLabel={"Login"} 
        btnFunc={login}
        />
      <Link href={"./signup"}>
        <p>Do not have an account? Signup here.</p>
      </Link>
    </>
  );
}
