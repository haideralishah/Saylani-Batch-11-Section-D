"use client";

import JobSeekerNavbar from "@/components/jobseeker-navbar";
import JobSeekerProtectedRoutes from "@/HOC/jobseeker-protected-route";
import { ReactNode } from "react";
type JobSeekerLayoutTypes = {
  children: ReactNode;
};
export default function JobSeekerLayout({ children }: JobSeekerLayoutTypes) {
  return (
    <JobSeekerProtectedRoutes>
      <JobSeekerNavbar />
      {children}
    </JobSeekerProtectedRoutes>
  );
}
