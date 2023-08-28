import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  womenProducts: any[];
  womenTotalPages: number;
}

const initialState: initialStateType = {
  womenProducts: [],
  womenTotalPages: 0,
};

const womenProductsSlice = createSlice({
  name: "womenProducts",
  initialState,
  reducers: {
    loadWomenProducts: (state, { payload }: PayloadAction<any>) => {
      state.womenProducts = payload.products;
      state.womenTotalPages = payload.totalPages;
    },
  },
});

export const { loadWomenProducts } = womenProductsSlice.actions;

export default womenProductsSlice.reducer;
