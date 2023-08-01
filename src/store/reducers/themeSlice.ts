import { createSlice } from "@reduxjs/toolkit";
import { ThemeMods } from "consts/constants";

const initialState = {
	mode: ThemeMods.LIGHT,
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setMode(state) {
			state.mode = state.mode === ThemeMods.LIGHT ? ThemeMods.DARK : ThemeMods.LIGHT;
		},
	},
});

export default themeSlice.reducer;
export const { setMode } = themeSlice.actions;
