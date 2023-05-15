import { PagesName, PagesPath } from "consts/pages";

type TypeRoutes = Array<{ path: PagesPath; element: React.FC }>;

type NavigationItems = Array<{ path: PagesPath; label: PagesName }>;

interface Album {
	id: string;
	title: string;
	artist: string;
	year: number;
	image: string;
	createdAt: Date;
	url: string;
}

type Albums = Array<Album>;

interface AlbumsState {
	albums: Album[];
}

interface IAdditionalInfo {
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

export type { AlbumsState };

export type { NavigationItems, TypeRoutes, Album, Albums, IAdditionalInfo };
