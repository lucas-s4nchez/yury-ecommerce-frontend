import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../types";
import { removeInLocalStorage, saveInLocalStorage } from "../../helpers";
import { ILoginPayload, UserInitialState } from "../../models";

const initialState: UserInitialState = {
  status: AuthState.NOT_AUTHENTICATED,
  accessToken: null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onCheckingCredentials: (state) => {
      state.status = AuthState.CHECKING;
      state.accessToken = null;
      state.user = null;
    },
    onLogin: (state, { payload }: PayloadAction<ILoginPayload>) => {
      const { accessToken, user } = payload;

      state.status = AuthState.AUTHENTICATED;
      state.accessToken = accessToken;
      state.user = user;
      saveInLocalStorage("accessToken", accessToken);
    },
    onLogout: (state) => {
      state.status = AuthState.NOT_AUTHENTICATED;
      state.accessToken = null;
      state.user = null;
      removeInLocalStorage("accessToken");
    },
    getUser: (state, { payload }: PayloadAction<any>) => {
      state.user = payload.user;
    },
  },
});

export const { onCheckingCredentials, onLogin, onLogout } = userSlice.actions;

export default userSlice.reducer;
