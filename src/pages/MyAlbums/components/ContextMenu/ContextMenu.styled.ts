import styled from "styled-components";

const Wrapper = styled.div`
	position: absolute;
	top: 50%;
	right: 16px;
	z-index: ${({ theme }) => theme.order.other};
	transform: translateY(-50%);

	@media ${({ theme }) => theme.media.small} {
		right: 0;
	}
`;

const IconWrapper = styled.div`
	/* display: none; */

	& button {
		opacity: 0;

		&:focus {
			opacity: 1;
		}
	}

	@media ${({ theme }) => theme.media.extraLarge} {
		/* display: block; */
		opacity: 1;
	}
	& svg {
		fill: ${({ theme }) => theme.colors.contrastText};
	}
`;

const Menu = styled.ul`
	position: absolute;
	top: 30px;
	right: 24px;
	z-index: 20;

	display: none;
	min-width: max-content;
	padding: 0.5rem 0;
	border: 2px solid ${({ theme }) => theme.colors.contrastText};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};

	background-color: ${({ theme }) => theme.colors.background.default};
`;

const Item = styled.li`
	width: 100%;
	padding: 0.2rem 1rem;

	text-align: start;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.neutral};
	}
`;

export { Wrapper, IconWrapper, Menu, Item };
