import { API_KEY, API_URL } from "api";


const search = async (album: string, limit: string = '5', page: string = '10') => {
    const params = new URLSearchParams({
        method: 'album.search',
        album,
        api_key: API_KEY,
        format: 'json',
        limit,
        page,
    }).toString();

    const response = await fetch(API_URL + '?' + params);

    return response.json();
};

export default search;