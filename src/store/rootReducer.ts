import { combineReducers } from "@reduxjs/toolkit";
import albumsSlice from "./albumsSlice";
import themeSlice from "./themeSlice";
import autocompleteSlice from "./autocompleteSlice";

const rootReducer = combineReducers({
	albums: albumsSlice,
	theme: themeSlice,
	autocomplete: autocompleteSlice,
});

export default rootReducer;
