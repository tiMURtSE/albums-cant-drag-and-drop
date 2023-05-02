import { getAccessToken } from "api";
import { SPOTIFY_API } from "utils/consts";

const search = async (query: string): Promise<Record<string, any>> => {
    const { access_token } = await getAccessToken();
    const endpoint = SPOTIFY_API + 'search?';

    const params = new URLSearchParams({
        q: query,
        type: 'album',
        limit: '5',
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