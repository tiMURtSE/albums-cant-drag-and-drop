import { SPOTIFY_TOKEN } from "consts/api";

const getAccessToken = async () => {
	const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
	const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

	const response = await fetch(SPOTIFY_TOKEN, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
	});

	return await response.json();
};

export default getAccessToken;
