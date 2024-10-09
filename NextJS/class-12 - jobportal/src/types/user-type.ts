import { AdminType } from "./admin-type";
import { CompanyType } from "./company-type";
import { JobSeekerType } from "./jobseeker-type";

export type UserType = JobSeekerType | CompanyType | AdminType;