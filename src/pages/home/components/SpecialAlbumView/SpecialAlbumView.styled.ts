import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Content = styled(FlexBetween)<{ place: number }>`
	position: relative;
	gap: 2rem;

	padding: 0 40px 0 80px;

	&::before {
		content: "${(props) => props.place}";
		position: absolute;
		top: 50%;
		left: 40px;
		z-index: ${({ theme }) => theme.order.other};
		transform: translate(-50%, -50%);

		font-size: ${({ theme }) => theme.fonts.large};
		font-weight: 700;
	}
`;

const Info = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	height: 200px;
	padding-bottom: 1rem;
`;

const Title = styled.p`
	padding: 0 0 1rem 0.5rem;
	border-bottom: 3px solid #000;

	font-family: "Roboto Serif", serif;
	font-size: ${({ theme }) => theme.fonts.extraLarge};
	font-weight: 700;
	font-style: italic;
	line-height: 1;
	letter-spacing: -2.5px;
`;

const ArtistAndYear = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;

	padding-left: 1rem;
`;

const Artist = styled.p`
	font-family: "Roboto Serif", serif;
	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 700;
`;

const Year = styled.p`
	position: relative;

	color: ${({ theme }) => theme.colors.primary.dark};
`;

export { Content, Info, Title, ArtistAndYear, Artist, Year };
