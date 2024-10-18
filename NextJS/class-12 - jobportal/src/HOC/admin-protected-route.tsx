"use client";

import { useAuthContext } from "@/context/auth-context";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

type AdminProtectedRoutesTypes = {
  children: ReactNode;
};

export default function AdminProtectedRoutes({
  children,
}: AdminProtectedRoutesTypes) {
  const { user } = useAuthContext()!;
  const route = useRouter();

  useEffect(() => {
    if (user?.role === "company") {
      route.push("/company/all-jobs");
    } else if (user?.role === "job seeker") {
      route.push("/jobseeker");
    }
  }, [user]);

  return <>{children}</>;
}
