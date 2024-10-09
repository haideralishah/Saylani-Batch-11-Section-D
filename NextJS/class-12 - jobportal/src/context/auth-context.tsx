"use client";
import { auth, db } from "@/firebase/firebaseconfig";
import { AdminType } from "@/types/admin-type";
import { CompanyType } from "@/types/company-type";
import { JobSeekerType } from "@/types/jobseeker-type";
import { UserType } from "@/types/user-type";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ChildrenType = {
  children: ReactNode;
};

type ContextType = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
};

const AuthContext = createContext<ContextType | null>(null);

export default function AuthContextProvider({ children }: ChildrenType) {
  const [user, setUser] = useState<UserType | null>(null);

  const route = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        fetchuserData(uid);
      } else {
        setUser(null);
      }
    });
  }, []);

  const fetchuserData = async (uid: string) => {
    let docRef = doc(db, "users", uid);
    try {
      let userFound = await getDoc(docRef);
      let user = userFound.data();

      if (!user) return;

      // if (!user.name) {
      //   route.push("/company/companyinfo");
      // } else {
      //   route.push("/company");
      // }

      setUser(user as UserType);
    } catch (e) {
      console.error("error:", e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
