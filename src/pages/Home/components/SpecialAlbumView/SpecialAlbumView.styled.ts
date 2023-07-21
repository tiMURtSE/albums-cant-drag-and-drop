import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Content = styled(FlexBetween)<{ position: number }>`
	position: relative;
	gap: 2rem;

	&::before {
		content: "${({ position }) => position}";
		position: absolute;
		top: 50%;
		left: -40px;
		z-index: ${({ theme }) => theme.order.other};
		transform: translate(-50%, -50%);

		font-size: ${({ theme }) => theme.fonts.large};
		font-weight: 700;
		direction: rtl;

		@media ${({ theme }) => theme.media.extraLarge} {
			left: -25px;
			font-size: 20px;
		}

		@media ${({ theme }) => theme.media.small} {
			left: -19px;
			font-size: 16px;
		}
	}

	@media ${({ theme }) => theme.media.small} {
		gap: 0.5rem;
	}
`;

const CrownIconWrapper = styled.div<{ position: number }>`
	position: absolute;
	top: 50%;
	left: -70px;
	z-index: ${({ theme }) => theme.order.other};
	transform: translate(-50%, -50%);
	font-size: 0;

	& svg {
		width: 24px;
		height: 24px;
		fill: ${({ position }) => ["gold", "silver", "sienna"][position - 1]};

		@media ${({ theme }) => theme.media.extraLarge} {
			width: 20px;
			height: 20px;
		}

		@media ${({ theme }) => theme.media.small} {
			width: 14px;
			height: 14px;
		}
	}

	@media ${({ theme }) => theme.media.extraLarge} {
		left: -45px;
	}

	@media ${({ theme }) => theme.media.small} {
		top: 30%;
		left: -19px;
	}
`;

const AlbumCoverWrapper = styled.div`
	width: 200px;
	height: 200px;

	@media ${({ theme }) => theme.media.extraLarge} {
		width: 150px;
		height: 150px;
	}

	@media ${({ theme }) => theme.media.small} {
		width: 100px;
		height: 100px;
	}
`;

const Description = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 200px;
	padding-bottom: 1rem;

	@media ${({ theme }) => theme.media.extraLarge} {
		height: 150px;
	}

	@media ${({ theme }) => theme.media.small} {
		height: 100px;
		padding-bottom: 0;
	}
`;

const TitleWrapper = styled.div`
	overflow: hidden;
	padding: 0 0 1rem 0.5rem;
	border-bottom: 3px solid ${({ theme }) => theme.colors.contrastText};

	@media ${({ theme }) => theme.media.small} {
		padding-bottom: 0;
		border-bottom-width: 2px;
	}
`;

const ArtistAndYear = styled(FlexBetween)`
	padding: 0 1rem;

	@media ${({ theme }) => theme.media.small} {
		padding: 0 0.5rem;
	}
`;

const Artist = styled.h3`
	font-family: "Roboto Serif", serif;
	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 700;

	@media ${({ theme }) => theme.media.extraLarge} {
		font-size: 18px;
	}

	@media ${({ theme }) => theme.media.small} {
		font-size: 14px;
	}
`;

const Year = styled.p`
	color: ${({ theme }) => theme.colors.primary.dark};

	@media ${({ theme }) => theme.media.extraLarge} {
		font-size: 12px;
	}

	@media ${({ theme }) => theme.media.small} {
		font-size: 10px;
	}
`;

export {
	Content,
	CrownIconWrapper,
	AlbumCoverWrapper,
	Description,
	TitleWrapper,
	ArtistAndYear,
	Artist,
	Year,
};
