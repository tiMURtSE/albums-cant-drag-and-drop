import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Content = styled(FlexBetween)`
	height: ${({ theme }) => theme.sizes.header.height};
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

export { Content, Navigation, Theme };
