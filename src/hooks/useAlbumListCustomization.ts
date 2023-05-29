import { useMemo } from "react";
import { Decades, IAlbum, IModifiers, Sort } from "types";

type Customization = {
	sort: Sort;
	searchQuery: string;
	filterByDecades: Decades;
};

export const useAlbumListCustomization = (
	albums: IAlbum[],
	customizations: Customization
): IAlbum[] => {
	let customizedAlbumList;

	customizedAlbumList = sortAlbums(albums, customizations.sort);
	customizedAlbumList = searchAlbums(customizedAlbumList, customizations.searchQuery);
	customizedAlbumList = filterAlbums(customizedAlbumList, customizations.filterByDecades);

	return customizedAlbumList;
};

const sortAlbums = (albums: IAlbum[], sort: Sort) => {
	const sortedAlbums = useMemo(() => {
		if (sort.sortingColumn) {
			if (sort.sortingColumn === "year") {
				if (sort.typeOfSort === "asc") {
					return [...albums].sort(
						(a: any, b: any) => a[sort.sortingColumn] - b[sort.sortingColumn]
					);
				}

				if (sort.typeOfSort === "desc") {
					return [...albums].sort(
						(a: any, b: any) => b[sort.sortingColumn] - a[sort.sortingColumn]
					);
				}

				return albums;
			} else {
				if (sort.typeOfSort === "asc") {
					return [...albums].sort((a: any, b: any) =>
						a[sort.sortingColumn].localeCompare(b[sort.sortingColumn])
					);
				}

				if (sort.typeOfSort === "desc") {
					return [...albums].sort((a: any, b: any) =>
						b[sort.sortingColumn].localeCompare(a[sort.sortingColumn])
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
