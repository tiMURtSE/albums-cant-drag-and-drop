import { useMemo } from "react";
import { IAlbum, IModifiers } from "types";

export const useAlbumListModifier = (albums: IAlbum[], modifiers: IModifiers): IAlbum[] => {
	const sortedAlbums = sortAlbums(albums, modifiers.sort);
	const searchedAlbums = searchAlbums(sortedAlbums, modifiers.query);
	const filteredAlbums = filterAlbums(searchedAlbums, modifiers.flaggedDecades);

	return filteredAlbums;
};

const sortAlbums = (albums: IAlbum[], sort: { column: keyof IAlbum | ""; type: string }) => {
	const sortedAlbums = useMemo(() => {
		if (sort.column) {
			if (sort.column === "year") {
				if (sort.type === "asc") {
					return [...albums].sort((a: any, b: any) => a[sort.column] - b[sort.column]);
				}

				if (sort.type === "desc") {
					return [...albums].sort((a: any, b: any) => b[sort.column] - a[sort.column]);
				}

				return albums;
			} else {
				if (sort.type === "asc") {
					return [...albums].sort((a: any, b: any) =>
						a[sort.column].localeCompare(b[sort.column])
					);
				}

				if (sort.type === "desc") {
					return [...albums].sort((a: any, b: any) =>
						b[sort.column].localeCompare(a[sort.column])
					);
				}

				return albums;
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

const filterAlbums = (albums: IAlbum[], flaggedDecades: string[]) => {
	const formattedFlaggedDecade = flaggedDecades.map((decade) => decade.slice(0, 1));

	const filteredAlbums = useMemo(() => {
		if (flaggedDecades.length) {
			return [...albums].filter((album) => {
				const formattedDecade = String(album.year).slice(2, 3);

				return formattedFlaggedDecade.includes(formattedDecade);
			});
		} else {
			return albums;
		}
	}, [albums, flaggedDecades]);

	return filteredAlbums;
};
