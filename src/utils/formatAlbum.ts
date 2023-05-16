import { Album } from "types";

const formatAlbum = (album: Record<string, any>): Album => {
	const { id, name, artists, release_date, images, external_urls } = album;

	return {
		id,
		title: name,
		artist: artists[0].name,
		year: release_date.split("-")[0],
		image: images[0].url,
		createdAt: new Date().toLocaleDateString(),
		url: external_urls.spotify,
	};
};

export default formatAlbum;
