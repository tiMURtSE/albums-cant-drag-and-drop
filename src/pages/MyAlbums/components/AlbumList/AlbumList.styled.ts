import { SortingTypes } from "consts";
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

const CaptionSortButton = styled.span<{ sortState?: SortingTypes | "" }>`
	color: ${({ sortState, theme }) => (sortState ? theme.colors.contrastText : "inherit")};
	cursor: pointer;

	&::after {
		content: "${({ sortState }) =>
			sortState === SortingTypes.Ascending
				? "↓"
				: sortState === SortingTypes.Descending
				? "↑"
				: ""}";
	}

	&:hover {
		color: ${({ theme }) => theme.colors.contrastText};
	}
`;

export { Caption, CaptionItem, CaptionSortButton };
