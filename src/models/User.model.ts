import { UserRole } from "../types";

export interface User {
  name: string;
  lastName: string;
  email: string;
  role: UserRole;
}
