import { useMemo } from "react";
import { IAlbum } from "types";

type Modifiers = {
	sort: keyof IAlbum | "";
	query: string;
	flaggedYears: string;
};

export const useAlbumListModifier = (albums: IAlbum[], modifiers: Modifiers): IAlbum[] => {
	const sortedAlbums = sortAlbums(albums, modifiers.sort);
	const searchedAlbums = searchAlbums(sortedAlbums, modifiers.query);
	const filteredAlbums = filterAlbums(searchedAlbums, modifiers.flaggedYears);

	return filteredAlbums;
};

const sortAlbums = (albums: IAlbum[], sort: keyof IAlbum | "") => {
	const sortedAlbums = useMemo(() => {
		if (sort) {
			if (sort === "year") {
				return [...albums].sort((a: any, b: any) => a[sort] - b[sort]);
			} else {
				return [...albums].sort((a, b) => a[sort].localeCompare(b[sort]));
			}
		} else {
			return albums;
		}
	}, [albums, sort]);

	return sortedAlbums;
};

const searchAlbums = (albums: IAlbum[], query: string) => {
	const searchedAlbums = useMemo(() => {
		if (query) {
			const lowerCaseQuery = query.toLowerCase();

			return [...albums].filter((album) =>
				album.title.toLowerCase().includes(lowerCaseQuery)
			);
		} else {
			return albums;
		}
	}, [albums, query]);

	return searchedAlbums;
};

const filterAlbums = (albums: IAlbum[], flaggedYears: string) => {
	const formattedFlaggedYear = flaggedYears.replaceAll("0", "");
	// const formattedFlagedYear = flaggedYears.map((year) => year.slice(0, 1));
	const filteredAlbums = useMemo(() => {
		if (flaggedYears.length) {
			return [...albums].filter((album) => {
				const formattedYear = String(album.year).slice(2, 3);

				return formattedFlaggedYear.includes(formattedYear);
			});
		} else {
			return albums;
		}
	}, [albums, flaggedYears]);

	return filteredAlbums;
};
