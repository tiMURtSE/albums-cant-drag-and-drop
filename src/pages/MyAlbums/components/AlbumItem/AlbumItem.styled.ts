import styled from "styled-components";

const Item = styled.li<{ isDragging: boolean }>`
	position: relative;
	display: flex;
	align-items: center;
	gap: 2rem;
	padding: 0.5rem 3.5rem 0.5rem 1rem;

	border-top: 2px solid ${({ theme }) => theme.colors.contrastText};

	&:last-child {
		border-bottom: 2px solid ${({ theme }) => theme.colors.contrastText};
	}

	&:hover {
		cursor: ${({ isDragging }) => (isDragging ? "grab" : "auto")};

		& div:last-child div:first-child {
			display: block;
		}
	}

	@media ${({ theme }) => theme.media.small} {
		gap: 0.5rem;
		padding-left: 0.5rem;
		padding-right: 44px;
	}
`;

const Position = styled.div`
	text-align: center;
	flex-basis: 30px;
	flex-shrink: 0;

	font-size: ${({ theme }) => theme.fonts.large};

	@media ${({ theme }) => theme.media.small} {
		flex-basis: 20px;
		font-size: 18px;
	}
`;

const CoverWrapper = styled.div`
	/* flex-basis: 17%; */

	& div {
		width: 80px;
		height: 80px;
	}
`;

const Names = styled.div`
	flex-grow: 1;
	/* flex-basis: calc(100% - 17% * 3 - 5%); */
`;

const Title = styled.div`
	font-size: ${({ theme }) => theme.fonts.large};
	line-height: 1;

	@media ${({ theme }) => theme.media.small} {
		font-size: 18px;
		font-weight: 700;
	}
`;

const Artist = styled.div`
	font-weight: 500;
`;

const Year = styled.div`
	flex-basis: 12%;

	@media ${({ theme }) => theme.media.medium} {
		display: none;
	}
`;

const CreatedAt = styled.div`
	flex-basis: 12%;

	@media ${({ theme }) => theme.media.extraLarge} {
		display: none;
	}
`;

export { Item, Position, CoverWrapper, Names, Title, Artist, Year, CreatedAt };
