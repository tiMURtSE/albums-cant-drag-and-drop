import { useMemo } from "react";
import { SortingTypes } from "consts/sorting";
import { Decades, IAlbum, Sorting } from "types";

type Customization = {
	sorting: Sorting;
	searchQuery: string;
	filterByDecades: Decades;
};

export const useAlbumListCustomization = (
	albums: IAlbum[],
	customizations: Customization
): IAlbum[] => {
	let customizedAlbumList;

	customizedAlbumList = sortAlbums(albums, customizations.sorting);
	customizedAlbumList = searchAlbums(customizedAlbumList, customizations.searchQuery);
	customizedAlbumList = filterAlbums(customizedAlbumList, customizations.filterByDecades);

	return customizedAlbumList;
};

const sortAlbums = (albums: IAlbum[], sorting: Sorting) => {
	const sortedAlbums = useMemo(() => {
		if (sorting.column) {
			if (sorting.column === "year") {
				if (sorting.type === SortingTypes.ASCENDING) {
					const column = sorting.column;

					return [...albums].sort((a: IAlbum, b: IAlbum) => a[column] - b[column]);
				}

				if (sorting.type === SortingTypes.DESCENDING) {
					const column = sorting.column;

					return [...albums].sort((a: IAlbum, b: IAlbum) => b[column] - a[column]);
				}

				return albums;
			} else if (sorting.column === "createdAt") {
				if (sorting.type === SortingTypes.ASCENDING) {
					const column = sorting.column;

					return [...albums].sort(
						(a: IAlbum, b: IAlbum) =>
							new Date(a[column]).getTime() - new Date(b[column]).getTime()
					);
				}

				if (sorting.type === SortingTypes.DESCENDING) {
					const column = sorting.column;

					return [...albums].sort(
						(a: IAlbum, b: IAlbum) =>
							new Date(b[column]).getTime() - new Date(a[column]).getTime()
					);
				}

				return albums;
			} else {
				if (sorting.type === SortingTypes.ASCENDING) {
					const column = sorting.column;

					return [...albums].sort((a: IAlbum, b: IAlbum) =>
						a[column].localeCompare(b[column])
					);
				}

				if (sorting.type === SortingTypes.DESCENDING) {
					const column = sorting.column;

					return [...albums].sort((a: IAlbum, b: IAlbum) =>
						b[column].localeCompare(a[column])
					);
				}

				return albums;
			}
		} else {
			return albums;
		}
	}, [albums, sorting]);

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
