"use client";

import CompanyProtectedRoutes from "@/HOC/company-protected-route";
import { ReactNode } from "react";
type CompanyLayoutTypes = {
  children: ReactNode;
};
export default function CompanyLayout({ children }: CompanyLayoutTypes) {
  return <CompanyProtectedRoutes>{children}</CompanyProtectedRoutes>;
}
