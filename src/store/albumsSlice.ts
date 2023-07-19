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
			const position = state.albums.length + 1;
			const newAlbum = { ...action.payload.album, position };
			state.albums.push(newAlbum);
		},
		removeAlbum(state, action: PayloadAction<{ album: IAlbum }>) {
			const removedAlbumId = action.payload.album.id;
			const updatedAlbums = state.albums
				.filter((album) => album.id !== removedAlbumId)
				.map((album, index) => {
					return { ...album, position: index + 1 };
				});

			state.albums = updatedAlbums;
		},
		setAlbums(state, action: PayloadAction<{ albums: IAlbum[] }>) {
			state.albums = action.payload.albums;
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
export const { addAlbum, removeAlbum, setAlbums, setFoundAlbums, clearFoundAlbums } =
	albumsSlice.actions;
