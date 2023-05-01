import { SPOTIFY_URL, TOKEN, authOptions } from "api";

const client_id = '70f454f65af9455a866e5de8906295e9';
const client_secret = '568277a14ed44d8b913e102b922704c0';

const getAccessToken = async () => {
    const url = 'https://accounts.spotify.com/api/token';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
    });

    return await response.json();
};

const search = async (query: string) => {
    const { access_token } = await getAccessToken();
    const endpoint = SPOTIFY_URL + 'search?';
    const params = new URLSearchParams({
        q: query,
        type: 'album'
    }).toString();
    const response = await fetch(endpoint + params, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        method: 'GET',
    });

    return await response.json();
};

export default search; 