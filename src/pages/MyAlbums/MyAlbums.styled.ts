import styled from "styled-components";

// const Settings = styled.div`
// 	margin-bottom: 20px;
// 	padding: 0 40px;
// `;

// const Filter = styled.div`
// 	display: flex;
// 	flex-wrap: wrap;

// 	background-color: ${({ theme }) => theme.colors.primary.neutral};
// 	border-radius: ${({ theme }) => theme.sizes.borderRadius};
// `;

// const Year = styled.div`
// 	flex-basis: 25%;
// 	text-align: center;
// 	padding: 5px 0;

// 	border-right: 1px solid ${({ theme }) => theme.colors.background.default};
// 	cursor: pointer;

// 	&:hover {
// 		background-color: ${({ theme }) => theme.colors.secondary.main};
// 	}

// 	&:nth-child(-n + 4) {
// 		border-bottom: 1px solid ${({ theme }) => theme.colors.background.default};
// 	}

// 	&:nth-child(4) {
// 		border-right: none;
// 	}

// 	&:first-child {
// 		border-top-left-radius: ${({ theme }) => theme.sizes.borderRadius};
// 	}

// 	&:nth-child(4) {
// 		border-top-right-radius: ${({ theme }) => theme.sizes.borderRadius};
// 	}
// 	&:nth-child(5) {
// 		border-bottom-left-radius: ${({ theme }) => theme.sizes.borderRadius};
// 	}
// `;

const Wrapper = styled.div`
	padding: 1rem 0;

	border: 2px solid ${({ theme }) => theme.colors.contrastText};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

const Caption = styled.div`
	display: flex;
	padding: 0 1rem;

	color: ${({ theme }) => theme.colors.primary.dark};

	& div:nth-child(2) {
		flex-basis: calc(100% - 17% * 3);
	}

	& div:not(:nth-child(2)) {
		flex-basis: 17%;
	}
`;

const SortAndSearch = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export { Wrapper, Caption, SortAndSearch };
