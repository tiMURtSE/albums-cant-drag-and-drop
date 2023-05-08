import { PagesName, PagesPath } from "consts/pages";

type TypeRoutes = Array<{ path: PagesPath; element: React.FC }>;

type NavigationItems = Array<{ path: PagesPath; label: PagesName }>;

type Album = {
	id: string;
	title: string;
	artist: string;
	year: number;
	image: string;
};

type TypeAdditionalInfo = {
	listeners: string;
	playcount: string;
	tags: Array<{ url: string; name: string }>;
	tracks: Array<{ duration: number; url: string; name: string }>;
	description: string;
};

type Albums = Array<Album>;

export type { NavigationItems, TypeRoutes, Album, Albums, TypeAdditionalInfo };
