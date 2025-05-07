import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    setMenuOpen: (state, action) => {
      state.menuOpen = action.payload;
    },
  },
});

export const menuReducer = menuSlice.reducer;
export const { toggleMenu, setMenuOpen } = menuSlice.actions;
