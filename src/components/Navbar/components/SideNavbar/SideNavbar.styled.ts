import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const SideNavbarContent = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 20;

	width: 320px;
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

const SideNavbarNavigation = styled.ul``;

const SideNavbarNavigationItem = styled.li`
	& a {
		display: block;
		padding: 0.5rem 2rem;

		color: ${({ theme }) => theme.colors.contrastText};
		border-radius: ${({ theme }) => theme.sizes.borderRadius};

		&:focus-visible {
			background-color: ${({ theme }) => theme.colors.primary.light};
		}

		&:hover {
			background-color: ${({ theme }) => theme.colors.primary.light};
		}
	}
`;

const ThemeWrapper = styled.div`
	margin-top: 2rem;
	padding-top: 1rem;
	border-top: 1px solid ${({ theme }) => theme.colors.primary.neutral};

	& > div {
		border-radius: ${({ theme }) => theme.sizes.borderRadius};
		padding: 0.5rem 2rem;

		color: ${({ theme }) => theme.colors.contrastText};
	}

	& button {
		border-bottom: 2px solid ${({ theme }) => theme.colors.contrastText};
	}
`;

export {
	SideNavbarContent,
	SideNavbarHeader,
	SideNavbarNavigation,
	SideNavbarNavigationItem,
	ThemeWrapper,
};
