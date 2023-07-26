import { IAlbum } from "types";

const formatAlbum = (album: Record<string, any>): IAlbum => {
	const { id, name, artists, release_date, images, external_urls } = album;

	return {
		id,
		title: name,
		artist: artists[0].name,
		year: Number(release_date.split("-")[0]),
		images: [
			{
				size: 640,
				url: images[0].url,
			},
			{
				size: 300,
				url: images[1].url,
			},
		],
		createdAt: new Date().toISOString(),
		url: external_urls.spotify,
		position: -1,
	};
};

export default formatAlbum;
