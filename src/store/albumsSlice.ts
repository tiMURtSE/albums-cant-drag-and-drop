import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAlbum } from "types";

const initialState = {
	albums: [] as Array<IAlbum>,
	foundAlbums: [] as Array<IAlbum>,
};

const albumsSlice = createSlice({
	name: "albums",
	initialState,
	reducers: {
		addAlbum(state, action: PayloadAction<{ album: IAlbum }>) {
			state.albums.push(action.payload.album);
		},
		removeAlbum(state, action: PayloadAction<{ album: IAlbum }>) {
			const removedAlbumId = action.payload.album.id;
			const updatedAlbums = state.albums.filter((album) => album.id !== removedAlbumId);

			state.albums = updatedAlbums;
		},
		setFoundAlbums(state, action: PayloadAction<{ albums: Array<IAlbum> }>) {
			state.foundAlbums = action.payload.albums;
		},
		clearFoundAlbums(state) {
			state.foundAlbums = [];
		},
	},
});

export default albumsSlice.reducer;
export const { addAlbum, removeAlbum, setFoundAlbums, clearFoundAlbums } = albumsSlice.actions;
