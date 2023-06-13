import { SortTypes } from "consts";
import styled from "styled-components";

const Caption = styled.ul`
	display: flex;
	padding: 0 1rem;

	color: ${({ theme }) => theme.colors.primary.dark};
`;

const CaptionItem = styled.li`
	flex-basis: 17%;

	&:first-child {
		flex-basis: 5%;
	}

	&:nth-child(3) {
		flex-basis: calc(100% - 17% * 3 - 5%);
	}
`;

const CaptionSortButton = styled.span<{ sortType?: SortTypes | ""; isDragging: boolean }>`
	color: ${({ sortType, theme }) => (sortType ? theme.colors.contrastText : "inherit")};
	cursor: pointer;

	&::after {
		content: "${({ sortType }) =>
			sortType === SortTypes.Ascending ? "↓" : sortType === SortTypes.Descending ? "↑" : ""}";
	}

	&:hover {
		color: ${({ isDragging, theme }) => (isDragging ? "" : theme.colors.contrastText)};
	}
`;

export { Caption, CaptionItem, CaptionSortButton };
