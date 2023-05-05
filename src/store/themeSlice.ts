import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	mode: "light",
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setMode(state) {
			state.mode = state.mode === "light" ? "dark" : "light";
		},
	},
});

export default themeSlice.reducer;
export const { setMode } = themeSlice.actions;
