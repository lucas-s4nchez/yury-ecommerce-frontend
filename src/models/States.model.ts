import { User } from "./";
import { AuthState } from "../types";

export interface UserInitialState {
  status: AuthState;
  accessToken: null | string;
  user: null | User;
}
