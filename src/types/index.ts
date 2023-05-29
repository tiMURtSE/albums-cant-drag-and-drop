import { SortTypes } from "consts";

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

interface IModifiers {
	sort: {
		column: keyof IAlbum | "";
		type: SortTypes | "";
	};
	query: string;
	flaggedDecades: Decades;
}

interface Sort {
	sortingColumn: keyof IAlbum | "";
	typeOfSort: SortTypes | "";
}

type Decades = ("50" | "60" | "70" | "80" | "90" | "00" | "10" | "20")[];

export type { IAlbum, IMetadata, IModifiers, Decades, Sort };
