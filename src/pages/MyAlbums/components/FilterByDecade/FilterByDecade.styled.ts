import styled from "styled-components";

const Filter = styled.div`
	display: flex;
	flex-wrap: wrap;

	border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

const Decade = styled.div<{ isFlagged: boolean }>`
	flex-basis: 25%;
	text-align: center;
	padding: 5px 0;

	background-color: ${({ isFlagged, theme }) => (isFlagged ? theme.colors.contrastText : "")};
	color: ${({ isFlagged, theme }) => (isFlagged ? theme.colors.background.default : "")};
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.background.default};
		background-color: ${({ theme }) => theme.colors.contrastText};
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
`;

export { Filter, Decade };
