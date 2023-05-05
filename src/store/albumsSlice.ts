import { createSlice } from "@reduxjs/toolkit";
import { Albums } from "types";

const initialState = {
	albums: [] as Albums,
	foundAlbums: [] as Albums,
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
				(album) => album.id !== removedAlbumId
			);

			state.albums = updatedAlbums;
		},
		setFoundAlbums(state, action) {
			state.foundAlbums = action.payload.albums;
		},
		clearFoundAlbums(state) {
			state.foundAlbums = [];
		},
	},
});

export default albumsSlice.reducer;
export const { addAlbum, removeAlbum, setFoundAlbums, clearFoundAlbums } =
	albumsSlice.actions;
