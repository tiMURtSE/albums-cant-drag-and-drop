import { SortTypes } from "consts";
import styled from "styled-components";

const Caption = styled.ul`
	display: flex;
	padding: 0 1rem;

	color: ${({ theme }) => theme.colors.primary.dark};
`;

const CaptionItem = styled.li`
	flex-basis: 17%;

	&:nth-child(2) {
		flex-basis: calc(100% - 17% * 3);
	}
`;

const CaptionSortButton = styled.span<{ sortType?: SortTypes | "" }>`
	color: ${({ sortType, theme }) => (sortType ? theme.colors.contrastText : "inherit")};
	cursor: pointer;

	&::after {
		content: "${({ sortType }) =>
			sortType === SortTypes.Ascending ? "↓" : sortType === SortTypes.Descending ? "↑" : ""}";
	}

	&:hover {
		color: ${({ theme }) => theme.colors.contrastText};
	}
`;

export { Caption, CaptionItem, CaptionSortButton };
