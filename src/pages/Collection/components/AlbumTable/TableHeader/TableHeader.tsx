import { SortableColumns } from "consts/sorting";
import { Sorting } from "types";
import { getTypeOfSorting } from "utils/getTypeOfSorting";
import { updateSortSettings } from "utils/updateSortSettings";
import * as Styled from "./TableHeader.styled";

type Props = {
	sorting: Sorting;
	isDragging: boolean;
	setSorting: React.Dispatch<React.SetStateAction<Sorting>>;
};

function TableHeader({ sorting, setSorting, isDragging }: Props) {
	const handleSortClick = (column: SortableColumns) => {
		if (isDragging) return;

		const newSort = updateSortSettings(sorting, column);

		setSorting(newSort);
	};

	return (
		<thead>
			<Styled.TableRow>
				<Styled.Position>№</Styled.Position>

				<Styled.AlbumCover>Обложка</Styled.AlbumCover>

				<Styled.TitleAndArtist>
					<Styled.SortButton
						sortType={getTypeOfSorting(sorting, SortableColumns.TITLE)}
						onClick={() => handleSortClick(SortableColumns.TITLE)}
						isDragging={isDragging}
					>
						Что и кем
					</Styled.SortButton>
				</Styled.TitleAndArtist>

				<Styled.Year>
					<Styled.SortButton
						sortType={getTypeOfSorting(sorting, SortableColumns.YEAR)}
						onClick={() => handleSortClick(SortableColumns.YEAR)}
						isDragging={isDragging}
					>
						Год
					</Styled.SortButton>
				</Styled.Year>

				<Styled.CreatedAt>
					<Styled.SortButton
						sortType={getTypeOfSorting(sorting, SortableColumns.CREATED_AT)}
						onClick={() => handleSortClick(SortableColumns.CREATED_AT)}
						isDragging={isDragging}
					>
						Дата добавления
					</Styled.SortButton>
				</Styled.CreatedAt>
			</Styled.TableRow>
		</thead>
	);
}

export default TableHeader;
