import { ALBUMS_PER_PAGE, SPOTIFY_API } from "consts";
import getAccessToken from "./getAccessToken";

const searchAlbums = async (query: string, page?: number): Promise<Record<string, any>> => {
	const { access_token } = await getAccessToken();
	const endpoint = SPOTIFY_API + "search?";
	const limit = ALBUMS_PER_PAGE;
	const offset = page ? page * limit - limit : 0;

	const params = new URLSearchParams({
		q: query,
		type: "album",
		limit: String(limit),
		offset: String(offset),
	}).toString();

	const response = await fetch(endpoint + params, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
		method: "GET",
	});

	return await response.json();
};

export default searchAlbums;
