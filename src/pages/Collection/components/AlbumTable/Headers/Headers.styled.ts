import { SortingTypes } from "consts/sorting";
import styled from "styled-components";

const Container = styled.div`
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

const Header = styled.div`
	user-select: none;

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
		flex-grow: 1;
	}

	&:nth-child(4) {
		flex-basis: 10%;
	}

	&:nth-child(5) {
		flex-basis: 17%;
	}
`;

const SortingButton = styled.span<{ type?: SortingTypes | ""; isDragging: boolean }>`
	color: ${({ type, theme }) => (type ? theme.colors.contrastText : "inherit")};
	font-weight: ${({ type }) => (type ? 700 : 500)};
	cursor: pointer;

	&::after {
		content: "${({ type }) =>
			type === SortingTypes.ASCENDING
				? " ↑"
				: type === SortingTypes.DESCENDING
				? " ↓"
				: " ⮃"}";
	}

	&:hover {
		color: ${({ isDragging, theme }) => (isDragging ? "" : theme.colors.contrastText)};
	}
`;

export { Container, Header, SortingButton };
