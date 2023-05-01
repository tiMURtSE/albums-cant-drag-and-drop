import { Albums } from "types";

const formatSeveralAlbums = (albums: Record<string, any>): Albums => {
    const items = albums.albums.items;
    const formattedAlbums = [];

    for (const item of items) {
        const {
            id,
            name,
            artists,
            release_date,
            images
        } = item;

        formattedAlbums.push({
            id,
            title: name,
            artist: artists[0].name,
            year: release_date.split('-')[0],
            image: images[0].url,
        });
    }

    return formattedAlbums;
};

export default formatSeveralAlbums;