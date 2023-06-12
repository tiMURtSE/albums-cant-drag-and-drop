import { SortTypes } from "consts";

interface IAlbum {
	id: string;
	title: string;
	artist: string;
	year: number;
	image: string;
	createdAt: string;
	url: string;
	position: number;
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

type DragAndDrop =
	| ((album: IAlbum) => {
			draggable: boolean;
			onDragStart: (e: any) => void;
			onDragEnd: (e: any) => void;
			onDragEnter: (e: any) => void;
			onDragLeave: (e: any) => void;
			onDragOver: (e: any) => void;
			onDrop: (e: any) => void;
	  })
	| null;

export type { IAlbum, IMetadata, IModifiers, Decades, Sort, DragAndDrop };
