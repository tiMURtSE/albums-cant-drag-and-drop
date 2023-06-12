import styled from "styled-components";

const Item = styled.li<{ isDragging: boolean }>`
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;

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
`;

const Position = styled.div`
	flex-basis: 5%;

	font-size: ${({ theme }) => theme.fonts.large};
`;

const CoverWrapper = styled.div`
	flex-basis: 17%;

	& div {
		width: 80px;
		height: 80px;
	}
`;

const Names = styled.div`
	flex-basis: calc(100% - 17% * 3 - 5%);
`;

const Title = styled.div`
	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 500;
	line-height: 1;
`;

const Artist = styled.div`
	font-weight: 500;
`;

const Year = styled.div`
	flex-basis: 17%;
`;

const CreatedAt = styled.div`
	flex-basis: 17%;
`;

export { Item, Position, CoverWrapper, Names, Title, Artist, Year, CreatedAt };
