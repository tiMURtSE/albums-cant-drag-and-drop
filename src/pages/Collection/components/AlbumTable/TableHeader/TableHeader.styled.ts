import { SortingTypes } from "consts/sorting";
import styled from "styled-components";

const TableRow = styled.tr``;

const TableData = styled.th`
	padding-right: 0.5rem;
	text-align: start;

	font-weight: 500;
	color: ${({ theme }) => theme.colors.primary.dark};
	user-select: none;
`;

const Position = styled(TableData)``;

const AlbumCover = styled(TableData)``;

const TitleAndArtist = styled(TableData)``;

const Year = styled(TableData)`
	@media ${({ theme }) => theme.media.medium} {
		display: none;
	}
`;

const CreatedAt = styled(TableData)`
	@media ${({ theme }) => theme.media.extraLarge} {
		display: none;
	}
`;

const SortButton = styled.span<{ sortType?: SortingTypes | ""; isDragging: boolean }>`
	color: ${({ sortType, theme }) => (sortType ? theme.colors.contrastText : "inherit")};
	font-weight: ${({ sortType }) => (sortType ? 700 : 500)};
	cursor: pointer;

	&::after {
		content: "${({ sortType }) =>
			sortType === SortingTypes.ASCENDING
				? " ↑"
				: sortType === SortingTypes.DESCENDING
				? " ↓"
				: " ⮃"}";
	}

	&:hover {
		color: ${({ isDragging, theme }) => (isDragging ? "" : theme.colors.contrastText)};
	}
`;

export { TableRow, TableData, Position, AlbumCover, TitleAndArtist, Year, CreatedAt, SortButton };
