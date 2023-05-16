import { SPOTIFY_API } from "consts";
import getAccessToken from "./getAccessToken";

const getSingleAlbum = async (id: string | undefined): Promise<Record<string, any>> => {
	const { access_token } = await getAccessToken();
	const endpoint = SPOTIFY_API + "albums/";

	const response = await fetch(endpoint + id, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
		method: "GET",
	});

	return await response.json();
};

export default getSingleAlbum;
