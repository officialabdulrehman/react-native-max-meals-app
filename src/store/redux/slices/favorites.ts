import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = { ids: string[] }

const initialState: State = { ids: [] }

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.push(action.payload.id)
    },
    removeFavorite: (state, action) => {
      state.ids.filter((id) => id !== action.payload.id)
      // state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    }
  }
})

export const favoriteReducer = favoritesSlice.reducer
export const { addFavorite, removeFavorite } = favoritesSlice.actions