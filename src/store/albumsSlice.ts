import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Album, Albums } from "types";

const initialState = {
	albums: [] as Albums,
	foundAlbums: [] as Albums,
};

const albumsSlice = createSlice({
	name: "albums",
	initialState,
	reducers: {
		addAlbum(state, action: PayloadAction<{ album: Album }>) {
			state.albums.push(action.payload.album);
		},
		removeAlbum(state, action: PayloadAction<{ album: Album }>) {
			const removedAlbumId = action.payload.album.id;
			const updatedAlbums = state.albums.filter(
				(album) => album.id !== removedAlbumId
			);

			state.albums = updatedAlbums;
		},
		setFoundAlbums(state, action: PayloadAction<{ albums: Albums }>) {
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
