import styled from "styled-components";

const MenuWrapper = styled.div`
	position: relative;
`;

const MenuIconWrapper = styled.div`
	display: none;

	position: absolute;
	top: 50%;
	right: 12px;
	z-index: ${({ theme }) => theme.order.other};
	transform: translateY(-50%);

	& svg {
		fill: ${({ theme }) => theme.colors.contrastText};
	}
`;

const Menu = styled.ul`
	display: none;
	padding: 0.5rem 0;
	min-width: max-content;

	position: absolute;
	top: 30px;
	right: 24px;
	z-index: 20;

	background-color: ${({ theme }) => theme.colors.background.default};
	border: 2px solid ${({ theme }) => theme.colors.contrastText};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

const MenuItem = styled.li`
	width: 100%;
	padding: 0.2rem 1rem;
	text-align: start;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.neutral};
	}
`;

export { MenuWrapper, MenuIconWrapper, Menu, MenuItem };
