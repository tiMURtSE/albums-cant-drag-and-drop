import { RootState } from "store";

export const isAutocompleteOpenSelector = (state: RootState) =>
	state.autocomplete.isAutocompleteOpen;
