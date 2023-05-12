import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Header = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: ${({ theme }) => theme.order.header};
	width: 100%;

	backdrop-filter: saturate(180%) blur(5px);
`;

const Content = styled(FlexBetween)`
	justify-content: space-between;

	width: 100%;
	height: ${({ theme }) => theme.sizes.header.height};
`;

const Title = styled.div`
	font-family: "Roboto Serif", "Rubik", sans-serif;
	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 700;
	font-style: italic;
	letter-spacing: -3.5px;
`;

const Navigation = styled.nav`
	display: flex;
	gap: 2rem;

	font-size: ${({ theme }) => theme.fonts.regular};
`;

const Theme = styled.div`
	width: 20px;
	height: 20px;

	cursor: pointer;

	& svg {
		width: 100%;
		height: 100%;

		fill: ${({ theme }) => theme.colors.contrastText};
	}
`;

export { Header, Content, Title, Navigation, Theme };
