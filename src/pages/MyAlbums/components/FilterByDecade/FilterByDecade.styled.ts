import styled from "styled-components";

const Filter = styled.div`
	display: flex;
	flex-wrap: wrap;

	border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

const Decade = styled.button<{ isFlagged: boolean; isDragging: boolean }>`
	flex-basis: 25%;
	text-align: center;
	padding: 5px 0;

	background-color: ${({ isFlagged, theme }) => (isFlagged ? theme.colors.contrastText : "")};
	color: ${({ isFlagged, theme }) =>
		isFlagged ? theme.colors.background.default : theme.colors.contrastText};
	cursor: pointer;

	&:hover {
		color: ${({ isDragging, theme }) => (isDragging ? "" : theme.colors.background.default)};
		background-color: ${({ isDragging, theme }) =>
			isDragging ? "" : theme.colors.contrastText};
	}

	&:nth-child(-n + 4) {
		border-bottom: 2px solid ${({ theme }) => theme.colors.contrastText};
	}

	&:first-child {
		border-top-left-radius: ${({ theme }) => theme.sizes.borderRadius};
	}

	&:last-child {
		border-right: none;
		border-bottom-right-radius: ${({ theme }) => theme.sizes.borderRadius};
	}

	&:nth-child(4) {
		border-right: none;
	}

	&:nth-child(4) {
		border-top-right-radius: ${({ theme }) => theme.sizes.borderRadius};
	}

	&:nth-child(5) {
		border-bottom-left-radius: ${({ theme }) => theme.sizes.borderRadius};
	}

	&:focus-visible {
		outline: 2px solid blue;
	}

	@media ${({ theme }) => theme.media.medium} {
		padding: 10px 0;
	}
`;

export { Filter, Decade };
