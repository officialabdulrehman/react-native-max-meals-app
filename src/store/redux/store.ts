import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./slices/favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer
  },
})

export type RootState = ReturnType<typeof store.getState>