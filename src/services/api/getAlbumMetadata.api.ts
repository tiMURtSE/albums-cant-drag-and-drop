import { LASTFM_API } from "consts/api";
import { IAlbum } from "types";

const getAlbumMetadata = async (album: IAlbum): Promise<Record<string, any>> => {
	const params = new URLSearchParams({
		method: "album.getinfo",
		api_key: import.meta.env.VITE_LASTFM_TOKEN,
		artist: album.artist,
		album: album.title,
		format: "json",
	}).toString();

	const response = await fetch(`${LASTFM_API}?${params}`);

	return await response.json();
};

export default getAlbumMetadata;
