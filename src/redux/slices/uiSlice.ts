import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  isOpenMenu: boolean;
}

const initialState: initialStateType = {
  isOpenMenu: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpenMenu = true;
    },
    closeMenu: (state) => {
      state.isOpenMenu = false;
    },
  },
});

export const { openMenu, closeMenu } = uiSlice.actions;

export default uiSlice.reducer;
