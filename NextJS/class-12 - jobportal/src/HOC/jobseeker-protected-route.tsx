"use client";

import { useAuthContext } from "@/context/auth-context";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

type JobSeekerProtectedRoutesTypes = {
  children: ReactNode;
};

export default function JobSeekerProtectedRoutes({
  children,
}: JobSeekerProtectedRoutesTypes) {
  const { user } = useAuthContext()!;
  const route = useRouter();

  useEffect(() => {
    if (user?.role === "company") {
      route.push("/company/all-jobs");
    } else if (user?.role === "admin") {
      route.push("/admin");
    }
    if (user && user.role === "job seeker" && !("name" in user!)) {
      route.push("/jobseeker/jobseekerinfo");
    }
  }, [user]);

  return <>{children}</>;
}
