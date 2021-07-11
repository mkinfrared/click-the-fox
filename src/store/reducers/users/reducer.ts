import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User } from "./types";

const storageKey = "users";
const savedUsers = localStorage.getItem(storageKey);
const initialState: User[] = savedUsers ? JSON.parse(savedUsers) : [];

const movieSlice = createSlice({
  name: "@@users",
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<User>) => {
      state[state.length - 1] = action.payload;

      localStorage.setItem(storageKey, JSON.stringify(state));
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    }
  }
});

const { actions, reducer } = movieSlice;
const { addScore, addUser } = actions;

export { addScore, addUser };

export default reducer;
