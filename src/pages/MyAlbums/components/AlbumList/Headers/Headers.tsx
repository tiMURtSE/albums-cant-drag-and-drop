import { useMediaQuery } from "hooks/useMediaQuery";
import { SortableColumns } from "consts/sorting";
import { theme } from "theme/theme";
import { Sorting } from "types";
import { getTypeOfSorting } from "utils/getTypeOfSorting";
import { updateSortingSettings } from "utils/updateSortingSettings";
import * as Styled from "./Headers.styled";

type Props = {
	sorting: Sorting;
	isDragging: boolean;
	setSorting: React.Dispatch<React.SetStateAction<Sorting>>;
};

function TableHeader({ sorting, setSorting, isDragging }: Props) {
	const largeScreenSize = theme.media.extraLarge;
	const mediumScreenSize = theme.media.medium;
	const isBelowLargeScreens = useMediaQuery(largeScreenSize);
	const isBelowMediumScreens = useMediaQuery(mediumScreenSize);

	const handleSortingClick = (column: SortableColumns) => {
		if (isDragging) return;

		const newSort = updateSortingSettings(sorting, column);

		setSorting(newSort);
	};

	return (
		<Styled.Caption>
			<Styled.CaptionItem>№</Styled.CaptionItem>

			<Styled.CaptionItem>Обложка</Styled.CaptionItem>

			<Styled.CaptionItem>
				<Styled.SortingButton
					type={getTypeOfSorting(sorting, SortableColumns.TITLE)}
					onClick={() => handleSortingClick(SortableColumns.TITLE)}
					isDragging={isDragging}
				>
					Что и кем
				</Styled.SortingButton>
			</Styled.CaptionItem>

			{!isBelowMediumScreens && (
				<Styled.CaptionItem>
					<Styled.SortingButton
						type={getTypeOfSorting(sorting, SortableColumns.YEAR)}
						onClick={() => handleSortingClick(SortableColumns.YEAR)}
						isDragging={isDragging}
					>
						Год
					</Styled.SortingButton>
				</Styled.CaptionItem>
			)}

			{!isBelowLargeScreens && (
				<Styled.CaptionItem>
					<Styled.SortingButton
						type={getTypeOfSorting(sorting, SortableColumns.CREATED_AT)}
						onClick={() => handleSortingClick(SortableColumns.CREATED_AT)}
						isDragging={isDragging}
					>
						Дата добавления
					</Styled.SortingButton>
				</Styled.CaptionItem>
			)}
		</Styled.Caption>
	);
}

export default TableHeader;
