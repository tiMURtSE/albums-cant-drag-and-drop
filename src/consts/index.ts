export const SPOTIFY_API = "https://api.spotify.com/v1/";
export const LASTFM_API = "http://ws.audioscrobbler.com/2.0/";

export const appTitle = "SCARINGTHEHOOKS";

export enum PagesPath {
	Home = "/",
	Album = "/album/:id",
	MyAlbums = "/my-albums",
	Search = "/search/:query",
	Error = "*",
}

export enum ThemeMods {
	Light = "light",
	Dark = "dark",
}

export enum SortTypes {
	Ascending = "asc",
	Descending = "desc",
}
