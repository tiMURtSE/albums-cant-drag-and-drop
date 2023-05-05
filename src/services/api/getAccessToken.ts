import { CLIENT_ID, CLIENT_SECRET } from "consts/api";

const getAccessToken = async () => {
	const url = "https://accounts.spotify.com/api/token";

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
	});

	return await response.json();
};

export default getAccessToken;
