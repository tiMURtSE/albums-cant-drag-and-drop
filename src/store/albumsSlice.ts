import { createSlice } from "@reduxjs/toolkit";
import { Albums } from "types";

const initialState = {
	albums: [] as Albums,
    searchAlbums: [] as Albums,
};

const albumsSlice = createSlice({
	name: "albums",
	initialState,
	reducers: {
		addAlbum(state, action) {
			state.albums.push(action.payload.album);
		},
		removeAlbum(state, action) {
			const removedAlbumId = action.payload.album.id;
			const updatedAlbums = state.albums.filter(
				album => album.id !== removedAlbumId
			);

			state.albums = updatedAlbums;
		},
        setSearchAlbums(state, action) {
            state.searchAlbums = action.payload.albums;
        }
	},
});

export default albumsSlice.reducer;
export const { addAlbum, removeAlbum, setSearchAlbums } = albumsSlice.actions;
