import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	search: "",
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setsearch(state, action) {
			state.search = action.payload.search;
		},
	},
});

export default searchSlice.reducer;
export const { setsearch } = searchSlice.actions;
