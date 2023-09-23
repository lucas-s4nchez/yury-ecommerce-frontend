import { UserRole } from "../types";

export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role: UserRole;
  province: null | string;
  city: null | string;
  address: null | string;
  dni: null | string;
  phone: null | string;
}
