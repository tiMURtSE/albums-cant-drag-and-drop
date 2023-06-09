import { IAlbum } from "types";

const formatAlbum = (album: Record<string, any>): IAlbum => {
	const { id, name, artists, release_date, images, external_urls } = album;

	return {
		id,
		title: name,
		artist: artists[0].name,
		year: Number(release_date.split("-")[0]),
		image: images[0].url,
		createdAt: new Date().toLocaleDateString(),
		url: external_urls.spotify,
		position: -1,
	};
};

export default formatAlbum;
