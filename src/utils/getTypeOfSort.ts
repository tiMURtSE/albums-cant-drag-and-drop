import { IAlbum, Sort } from "types";

export const getTypeOfSort = (sort: Sort, sortingColumn: keyof IAlbum) => {
	if (sortingColumn === sort.sortingColumn) {
		return sort.typeOfSort;
	}
};
