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
					const column = sort.sortingColumn;

					return [...albums].sort((a: IAlbum, b: IAlbum) => a[column] - b[column]);
				}

				if (sort.typeOfSort === "desc") {
					const column = sort.sortingColumn;

					return [...albums].sort((a: IAlbum, b: IAlbum) => b[column] - a[column]);
				}

				return albums;
			} else {
				if (
					sort.typeOfSort === "asc" &&
					sort.sortingColumn !== "position" &&
					sort.sortingColumn !== "images"
				) {
					const column = sort.sortingColumn;

					return [...albums].sort((a: IAlbum, b: IAlbum) =>
						a[column].localeCompare(b[column])
					);
				}

				if (
					sort.typeOfSort === "desc" &&
					sort.sortingColumn !== "position" &&
					sort.sortingColumn !== "images"
				) {
					const column = sort.sortingColumn;

					return [...albums].sort((a: IAlbum, b: IAlbum) =>
						b[column].localeCompare(a[column])
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
