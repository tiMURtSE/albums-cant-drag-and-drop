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

const NoContentPlaceholder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;

	text-align: center;
	font-size: ${({ theme }) => theme.fonts.extraLarge};
	line-height: 1;

	& svg {
		width: 300px;
		height: 300px;
	}

	@media ${({ theme }) => theme.media.medium} {
		font-size: 24px;

		& svg {
			width: 150px;
			height: 150px;
		}
	}

	@media ${({ theme }) => theme.media.medium} {
		font-size: 18px;

		& svg {
			width: 150px;
			height: 150px;
		}
	}
`;

export { List, NoContentPlaceholder };
