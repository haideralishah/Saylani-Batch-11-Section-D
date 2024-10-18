"use client";

import AdminNavbar from "@/components/admin-navbar";

import AdminProtectedRoutes from "@/HOC/admin-protected-route";

import { ReactNode } from "react";
type CompanyLayoutTypes = {
  children: ReactNode;
};
export default function CompanyLayout({ children }: CompanyLayoutTypes) {
  return (
    <AdminProtectedRoutes>
      <AdminNavbar />
      {children}
    </AdminProtectedRoutes>
  );
}
