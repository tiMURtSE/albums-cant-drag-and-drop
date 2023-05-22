interface IAlbum {
	id: string;
	title: string;
	artist: string;
	year: number;
	image: string;
	createdAt: string;
	url: string;
}

interface IMetadata {
	listeners: string;
	playcount: string;
	tags: Array<{ url: string; name: string }>;
	tracks: Array<{
		"@attr": { rank: number };
		artist: string;
		duration: number;
		name: string;
		streamable: object;
		url: string;
	}>;
	description: string;
}

export type { IAlbum, IMetadata };
