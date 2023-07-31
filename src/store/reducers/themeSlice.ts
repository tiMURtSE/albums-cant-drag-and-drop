import { createSlice } from "@reduxjs/toolkit";
import { ThemeMods } from "consts";

const initialState = {
	mode: ThemeMods.Light,
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setMode(state) {
			state.mode = state.mode === ThemeMods.Light ? ThemeMods.Dark : ThemeMods.Light;
		},
	},
});

export default themeSlice.reducer;
export const { setMode } = themeSlice.actions;
