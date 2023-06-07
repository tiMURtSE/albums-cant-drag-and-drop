import formatAlbum from "./formatAlbum";

export const formatAlbums = (albums: Record<string, any>[]) => {
	const formattedAlbums = [];

	for (let i = 0; i < albums.length; i++) {
		formattedAlbums.push(formatAlbum(albums[i]));
	}

	return formattedAlbums;
};
