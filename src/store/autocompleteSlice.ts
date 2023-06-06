import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAutocompleteOpen: false,
};

const autocompleteSlice = createSlice({
	name: "autocomplete",
	initialState,
	reducers: {
		setIsAutocompleteOpen: (state, action) => {
			state.isAutocompleteOpen = action.payload.isAutocompleteOpen;
		},
	},
});

export default autocompleteSlice.reducer;
export const { setIsAutocompleteOpen } = autocompleteSlice.actions;
