import { SortTypes, SortableColumns } from "consts";
import { Sort } from "types";

export const updateSortSettings = (sort: Sort, column: SortableColumns): Sort => {
	const isPreviousColumnSorting = sort.sortingColumn === column;
	let newColumn: SortableColumns | "" = column;
	let newType: SortTypes | "" = "";

	if (isPreviousColumnSorting) {
		if (sort.typeOfSort === SortTypes.Ascending) {
			newType = SortTypes.Descending;
		} else if (sort.typeOfSort === SortTypes.Descending) {
			newType = "";
			newColumn = "";
		}
	} else {
		newType = SortTypes.Ascending;
	}

	return { sortingColumn: newColumn, typeOfSort: newType };
};
