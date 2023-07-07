import styled from "styled-components";

const SideNavbarCloseButton = styled.button`
	border-radius: ${({ theme }) => theme.sizes.borderRadius};

	&:focus-visible {
		outline: none;
		background-color: ${({ theme }) => theme.colors.primary.light};
	}
`;

export { SideNavbarCloseButton };
