import { combineReducers } from "@reduxjs/toolkit";
import albumsSlice from "./albumsSlice";
import autocompleteSlice from "./autocompleteSlice";
import themeSlice from "./themeSlice";

const rootReducer = combineReducers({
	albums: albumsSlice,
	theme: themeSlice,
	autocomplete: autocompleteSlice,
});

export default rootReducer;
