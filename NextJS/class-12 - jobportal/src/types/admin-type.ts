import { UserRole } from "./user-role-type";

export type AdminType = {
  name?: string;
  email: string;
  uid: string;
  role: UserRole;
};
