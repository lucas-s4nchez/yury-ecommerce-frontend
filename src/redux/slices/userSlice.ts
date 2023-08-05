import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState, UserRole } from "../../types";
import { User } from "../../models";

interface initialStateType {
  status: AuthState;
  token: null | string;
  user: null | User;
}

export interface ILoginPayload {
  token: string;
  user: User;
}

const testUser: User = {
  name: "Lucas",
  lastName: "Sánchez",
  email: "lucas@gmail.com",
  role: UserRole.ADMIN,
};

const initialState: initialStateType = {
  status: AuthState.AUTHENTICATED,
  token: null,
  user: testUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onCheckingCredentials: (state) => {
      state.status = AuthState.CHECKING;
      state.token = null;
      state.user = null;
    },
    onLogin: (state, { payload }: PayloadAction<ILoginPayload>) => {
      state.status = AuthState.AUTHENTICATED;
      state.token = payload.token;
      state.user = payload.user;
      localStorage.setItem("accessToken", payload.token);
    },
    onLogout: (state) => {
      state.status = AuthState.NOT_AUTHENTICATED;
      state.token = null;
      state.user = null;
      localStorage.removeItem("accessToken");
    },
    getUser: (state, { payload }: PayloadAction<any>) => {
      state.user = payload.user;
    },
  },
});

export const { onCheckingCredentials, onLogin, onLogout } = userSlice.actions;

export default userSlice.reducer;
