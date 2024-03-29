import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Container = styled(FlexBetween)`
	height: ${({ theme }) => theme.sizes.header.height};
`;

const Title = styled.h1`
	font-family: "Roboto Serif", "Rubik", sans-serif;
	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 700;
	font-style: italic;
	letter-spacing: -2.5px;
	line-height: 1;

	& a {
		padding: 10px 0;
	}

	@media ${({ theme }) => theme.media.medium} {
		font-size: 18px;
	}
`;

const Navigation = styled.nav`
	display: flex;
	gap: 2rem;

	font-size: ${({ theme }) => theme.fonts.regular};

	@media ${({ theme }) => theme.media.extraLarge} {
		display: none;
	}
`;

export { Container, Title, Navigation };
