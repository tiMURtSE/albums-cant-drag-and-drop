import { Albums } from "types";

const formatSearchAlbums = (albums: Record<string, any>): Albums => {
    const items: Array<object> = albums.albums.items;
    const formattedAlbums = items.map(({ name, artists, release_date, images }: Record<string, any>) => {
        return {
            title: name,
            artist: artists[0].name,
            year: release_date.split('-')[0],
            image: images[0].url,
        };
    });

    return formattedAlbums;
};

export default formatSearchAlbums;