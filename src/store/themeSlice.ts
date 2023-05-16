import { createSlice } from "@reduxjs/toolkit";
import { themeMods } from "consts";

const initialState = {
	mode: themeMods.Light,
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setMode(state) {
			state.mode = state.mode === themeMods.Light ? themeMods.Dark : themeMods.Light;
		},
	},
});

export default themeSlice.reducer;
export const { setMode } = themeSlice.actions;
