import { CLIENT_ID, CLIENT_SECRET } from "utils/consts";
import search from "./services/search.api";
import getSeveralAlbums from "./services/getSeveralAlbums.api";

const getAccessToken = async () => {
    const url = 'https://accounts.spotify.com/api/token';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    });

    return await response.json();
};

export {
    getAccessToken,
    search,
    getSeveralAlbums,
};