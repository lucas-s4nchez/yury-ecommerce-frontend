import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import uiSlice from "./slices/uiSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    ui: uiSlice,
  },
});

// setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
