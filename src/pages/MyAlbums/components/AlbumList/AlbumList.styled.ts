import { SortTypes } from "consts";
import styled from "styled-components";

const Caption = styled.ul`
	display: flex;
	gap: 2rem;
	padding: 0 3.5rem 0 1rem;

	color: ${({ theme }) => theme.colors.primary.dark};

	@media ${({ theme }) => theme.media.small} {
		gap: 0.5rem;
		padding-left: 0.5rem;
		padding-right: 44px;
	}
`;

const CaptionItem = styled.li`
	&:first-child {
		text-align: center;
		flex-basis: 30px;

		@media ${({ theme }) => theme.media.small} {
			flex-basis: 20px;
		}
	}

	&:nth-child(2) {
		flex-basis: 80px;
	}

	&:nth-child(3) {
		/* flex-basis: calc(100% - 17% * 3 - 5%); */
		flex-grow: 1;
	}

	&:nth-child(4) {
		flex-basis: 10%;
	}

	&:nth-child(5) {
		flex-basis: 16%;
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
