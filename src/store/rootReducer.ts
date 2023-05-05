import { combineReducers } from "@reduxjs/toolkit";
import albumsSlice from "./albumsSlice";
import themeSlice from "./themeSlice";

const rootReducer = combineReducers({
	albums: albumsSlice,
	theme: themeSlice,
});

export default rootReducer;
