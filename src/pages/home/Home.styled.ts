import styled from "styled-components";

const List = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding-left: 80px;

	@media ${({ theme }) => theme.media.extraLarge} {
		padding-left: 60px;
	}

	@media ${({ theme }) => theme.media.small} {
		padding-left: 25px;
		gap: 1rem;
	}
`;

export { List };
