import { IAlbum } from "types";

export const sortRearrangedAlbums = (a: IAlbum, b: IAlbum) => {
	return a.position - b.position;
};
