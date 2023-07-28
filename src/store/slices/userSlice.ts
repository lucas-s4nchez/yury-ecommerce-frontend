import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum RoleType {
  ADMIN = "ADMIN",
  USER = "USER",
}
export enum StatusType {
  CHECKING = "CHECKING",
  AUTHENTICATED = "AUTHENTICATED",
  NOT_AUTHENTICATED = "NOT_AUTHENTICATED",
}

type UserType = {
  name: string;
  lastName: string;
  email: string;
  role: RoleType;
};

type initialStateType = {
  status: StatusType;
  token: null | string;
  user: null | UserType;
};

const initialState: initialStateType = {
  status: StatusType.CHECKING,
  token: null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onCheckingCredentials: (state) => {
      state.status = StatusType.CHECKING;
      state.token = null;
      state.user = null;
    },
    onLogin: (state, { payload }: PayloadAction<any>) => {
      state.status = StatusType.AUTHENTICATED;
      state.token = payload.token;
      state.user = payload.user;
      localStorage.setItem("accessToken", payload.token);
    },
    onLogout: (state) => {
      state.status = StatusType.NOT_AUTHENTICATED;
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
