import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Content = styled(FlexBetween)`
	height: ${({ theme }) => theme.sizes.header.height};
`;

const NavbarTitle = styled.h1`
	font-family: "Roboto Serif", "Rubik", sans-serif;
	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 700;
	font-style: italic;
	letter-spacing: -2.5px;
	line-height: 1;

	@media ${({ theme }) => theme.media.medium} {
		font-size: ${({ theme }) => theme.fonts.regular};
	}
`;

const Navigation = styled.nav`
	display: flex;
	gap: 2rem;

	font-size: ${({ theme }) => theme.fonts.regular};

	@media (${({ theme }) => theme.media.extraLarge}) {
		display: none;
	}
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

export { Content, NavbarTitle, Navigation, Theme };
