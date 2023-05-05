import { configureStore } from "@reduxjs/toolkit";
import albumsSlice from "./albumsSlice";
import themeSlice from "./themeSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
	reducer: {
		albums: albumsSlice,
		theme: themeSlice,
		search: searchSlice,
	},
});

export default store;
