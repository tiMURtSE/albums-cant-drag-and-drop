import { getAccessToken } from "api";
import { SPOTIFY_API } from "utils/consts";

const getSeveralAlbums = async (favoriteAlbumsId: Array<string>) => {
    const { access_token } = await getAccessToken();
    const endpoint = SPOTIFY_API + 'albums?';
    const ids = favoriteAlbumsId.join('%2C');

    const response = await fetch(endpoint + 'ids=' + ids, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        method: 'GET',
    });

    return await response.json();
};

export default getSeveralAlbums;