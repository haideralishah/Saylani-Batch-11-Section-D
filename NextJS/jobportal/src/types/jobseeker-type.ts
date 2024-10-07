import { UserRole } from "./user-role-type"

export type JobSeekerType = {
    name?: string,
    pic?: string,
    description?: string,
    address?: string,
    phone?: string,
    email: string,
    uid: string,
    role: UserRole,
    resume?: string
}