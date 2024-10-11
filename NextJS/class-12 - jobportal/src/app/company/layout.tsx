"use client";

import CompanyNavbar from "@/components/company-navbar";
import CompanyProtectedRoutes from "@/HOC/company-protected-route";
import { ReactNode } from "react";
type CompanyLayoutTypes = {
  children: ReactNode;
};
export default function CompanyLayout({ children }: CompanyLayoutTypes) {
  return <CompanyProtectedRoutes>
    <CompanyNavbar />
    {children}
  </CompanyProtectedRoutes>;
}
