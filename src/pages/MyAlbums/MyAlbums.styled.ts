import styled from "styled-components";

const Settings = styled.div`
	margin-bottom: 20px;
	padding: 0 40px;
`;

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

export { Settings, Wrapper, Caption, SortAndSearch };
