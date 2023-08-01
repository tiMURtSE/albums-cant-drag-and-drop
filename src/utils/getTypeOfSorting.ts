import { SortableColumns } from "consts/sorting";
import { Sorting } from "types";

export const getTypeOfSorting = (sorting: Sorting, column: SortableColumns) => {
	if (column === sorting.column) {
		return sorting.type;
	}
};
