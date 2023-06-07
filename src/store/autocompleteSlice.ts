import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAutocompleteOpen: false,
};

const autocompleteSlice = createSlice({
	name: "autocomplete",
	initialState,
	reducers: {
		openAutocomplete: (state) => {
			state.isAutocompleteOpen = true;
		},

		closeAutocomplete: (state) => {
			state.isAutocompleteOpen = false;
		},
	},
});

export default autocompleteSlice.reducer;
export const { openAutocomplete, closeAutocomplete } = autocompleteSlice.actions;
