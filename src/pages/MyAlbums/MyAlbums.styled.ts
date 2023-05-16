import styled from "styled-components";

const Settings = styled.div`
	padding: 0 40px;
`;

const Filter = styled.div`
	display: flex;
	flex-wrap: wrap;

	background-color: ${({ theme }) => theme.colors.primary.neutral};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

const Year = styled.div`
	flex-basis: 25%;
	text-align: center;
	padding: 5px 0;

	border-right: 1px solid ${({ theme }) => theme.colors.background.default};
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.secondary.main};
	}

	&:nth-child(-n + 4) {
		border-bottom: 1px solid
			${({ theme }) => theme.colors.background.default};
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

const List = styled.div`
	margin-top: 20px;
`;

const SortAndSearch = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export { Settings, Year, SortAndSearch, Filter, List };
