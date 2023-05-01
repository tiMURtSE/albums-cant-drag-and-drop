import { SPOTIFY_URL, TOKEN } from "api";


const search = async (query: string) => {
    const endpoint = SPOTIFY_URL + 'search?';
    const params = new URLSearchParams({
        q: query,
        type: 'album'
    }).toString();
    const response = await fetch(endpoint + params, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
        method: 'GET',
    });

    return await response.json();
};

export default search; 