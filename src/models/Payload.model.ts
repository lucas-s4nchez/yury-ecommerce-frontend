import { User } from "./";

export interface ILoginPayload {
  accessToken: string;
  user: User;
}
