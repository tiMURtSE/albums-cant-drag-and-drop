import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Content = styled(FlexBetween)<{ position: number }>`
	position: relative;
	gap: 2rem;
	padding: 0 40px 0 80px;

	&::before {
		content: "${({ position }) => position}";
		position: absolute;
		top: 50%;
		left: 40px;
		z-index: ${({ theme }) => theme.order.other};
		transform: translate(-50%, -50%);

		font-size: ${({ theme }) => theme.fonts.large};
		font-weight: 700;
	}
`;

const Description = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	height: 200px;
	padding-bottom: 1rem;
`;

const TitleWrapper = styled.div`
	padding: 0 0 1rem 0.5rem;
	border-bottom: 3px solid ${({ theme }) => theme.colors.contrastText};
`;

const ArtistAndYear = styled(FlexBetween)`
	padding: 0 1rem;
`;

const Artist = styled.h3`
	font-family: "Roboto Serif", serif;
	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 700;
`;

const Year = styled.p`
	color: ${({ theme }) => theme.colors.primary.dark};
`;

export { Content, Description, TitleWrapper, ArtistAndYear, Artist, Year };
