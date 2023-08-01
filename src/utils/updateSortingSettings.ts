import { SortableColumns, SortingTypes } from "consts/sorting";
import { Sorting } from "types";

export const updateSortingSettings = (sort: Sorting, column: SortableColumns): Sorting => {
	const isPreviousColumnSorting = sort.column === column;
	let newColumn: SortableColumns | "" = column;
	let newType: SortingTypes | "" = "";

	if (isPreviousColumnSorting) {
		if (sort.type === SortingTypes.ASCENDING) {
			newType = SortingTypes.DESCENDING;
		} else if (sort.type === SortingTypes.DESCENDING) {
			newType = "";
			newColumn = "";
		}
	} else {
		newType = SortingTypes.ASCENDING;
	}

	return { column: newColumn, type: newType };
};
