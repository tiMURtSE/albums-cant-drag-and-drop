import styled from "styled-components";

const Content = styled.div`
	padding: 100px 0;
`;

const Filter = styled.div`
	display: flex;
	flex-wrap: wrap;

	background-color: ${({ theme }) => theme.colors.background.default};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

const Year = styled.div<{ isPressed: boolean }>`
	flex-basis: 25%;
	text-align: center;
	padding: 5px 0;

	background-color: ${(props) =>
		props.isPressed ? props.theme.colors.secondary.main : "auto"};
	border-right: 1px solid ${({ theme }) => theme.colors.primary.neutral};
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.secondary.main};
	}

	&:nth-child(-n + 4) {
		border-bottom: 1px solid ${({ theme }) => theme.colors.primary.neutral};
	}

	&:nth-child(4) {
		border-right: none;
	}

	&:first-child {
		border-top-left-radius: ${({ theme }) => theme.sizes.borderRadius};
	}

	&:nth-child(4) {
		border-top-right-radius: ${({ theme }) => theme.sizes.borderRadius};
	}
	&:nth-child(5) {
		border-bottom-left-radius: ${({ theme }) => theme.sizes.borderRadius};
	}
`;

const SortAndSearch = styled.div``;

export { Content, Year, SortAndSearch, Filter };
