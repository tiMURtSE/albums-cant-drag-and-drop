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
	border: 1px solid ${({ theme }) => theme.colors.primary.light};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	box-shadow: 0 0 30px 0 ${({ theme }) => theme.colors.primary.light};
`;

const SideNavbarHeader = styled(FlexBetween)`
	justify-content: flex-end;
	height: ${({ theme }) => theme.sizes.header.height};
`;

const SideNavbarCloseButton = styled.button`
	border-radius: ${({ theme }) => theme.sizes.borderRadius};

	&:focus-visible {
		outline: none;
		background-color: ${({ theme }) => theme.colors.primary.light};
	}
`;

const SideNavbarNavigation = styled.ul`
	& a {
		display: block;
		padding: 0.5rem 2rem;

		color: ${({ theme }) => theme.colors.contrastText};
		border-radius: ${({ theme }) => theme.sizes.borderRadius};

		&:focus {
			outline: none;
			background-color: ${({ theme }) => theme.colors.primary.light};
		}

		&:hover {
			background-color: ${({ theme }) => theme.colors.primary.light};
		}
	}
`;

const SideNavbarNavigationItem = styled.li``;

export {
	SideNavbarWrapper,
	SideNavbarContent,
	SideNavbarHeader,
	SideNavbarCloseButton,
	SideNavbarNavigation,
	SideNavbarNavigationItem,
};
