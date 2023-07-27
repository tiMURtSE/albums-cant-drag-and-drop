import { Navigation } from "types";

export const SPOTIFY_API = "https://api.spotify.com/v1/";
export const SPOTIFY_TOKEN = "https://accounts.spotify.com/api/token";
export const LASTFM_API = "https://ws.audioscrobbler.com/2.0/";

export const APP_TITLE = "SCARINGTHEHOOKS";

export const ALBUMS_PER_PAGE = 5;

export enum PagesPath {
	Album = "/album/:id",
	Auth = "/auth",
	Home = "/",
	MyAlbums = "/my-albums",
	Search = "/search/:query",
	Error = "*",
}

export enum PageTitles {
	Home = "Главная",
	MyAlbums = "Мои альбомы",
}

export enum ThemeMods {
	Light = "light",
	Dark = "dark",
}

export enum SortTypes {
	Ascending = "asc",
	Descending = "desc",
}

export enum ValidationMessages {
	Required = "Это поле обязательно для заполнения",
	Email = "Введите корректный адрес электронной почты",
	Min = "Это поле должно содержать хотя бы ",
	SpecialCharsAndDigits = "Это поле должно содержать хотя бы 1 спец. символ и 1 цифру",
}

export const navigationItems: Navigation = [
	{ path: PagesPath.Home, title: PageTitles.Home },
	{ path: PagesPath.MyAlbums, title: PageTitles.MyAlbums },
];
