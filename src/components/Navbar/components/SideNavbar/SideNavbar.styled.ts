import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const SideNavbarWrapper = styled.dialog`
	padding: 0;
	border: none;

	&::backdrop {
		background-color: rgb(0 0 0 / 0.5);
	}
`;

const SideNavbarContent = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 20;

	width: 50vw;
	height: 100vh;

	background-color: ${({ theme }) => theme.colors.background.default};
	box-shadow: 0 0 30px 0 ${({ theme }) => theme.colors.primary.light};
`;

const SideNavbarHeader = styled(FlexBetween)`
	justify-content: flex-end;
	height: ${({ theme }) => theme.sizes.header.height};
`;

export { SideNavbarWrapper, SideNavbarContent, SideNavbarHeader };
