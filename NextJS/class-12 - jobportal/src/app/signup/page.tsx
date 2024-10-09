"use client";

import AuthForm from "@/components/auth-forms";
import { auth, db } from "@/firebase/firebaseconfig";
import { UserRole } from "@/types/user-role-type";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";

export default function Signup() {
  const signup = async (email: string, password: string, role?: UserRole) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = userCredential.user;
      saveUserInFirestore(email, userData.uid, role!);
    } catch (e) {
      console.error(e);
    }
  };

  const saveUserInFirestore = async (
    email: string,
    uid: string,
    role: UserRole
  ) => {
    let user = { email, uid, role };
    let docRef = doc(db, "users", uid);
    await setDoc(docRef, user);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <AuthForm signup={true} func={signup} />
      <div>
        <p>
          Already have an account? <Link href={"/login"}>Login here.</Link>
        </p>
      </div>
    </div>
  );
}
