import { PageTitles, PagesPath, SortTypes, SortableColumns } from "consts";

interface IAlbum {
	id: string;
	title: string;
	artist: string;
	year: number;
	images: {
		size: number;
		url: string;
	}[];
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

type Navigation = { path: PagesPath; title: PageTitles }[];

interface IModifiers {
	sort: {
		column: keyof IAlbum | "";
		type: SortTypes | "";
	};
	query: string;
	flaggedDecades: Decades;
}

interface Sort {
	sortingColumn: SortableColumns | "";
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

export type { IAlbum, IMetadata, IModifiers, Navigation, Decades, Sort, DragAndDrop };
