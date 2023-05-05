import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	search: 'alo',
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearch(state, action) {
			state.search = action.payload.search;
		},
	},
});

export default searchSlice.reducer;
export const { setSearch } = searchSlice.actions;
