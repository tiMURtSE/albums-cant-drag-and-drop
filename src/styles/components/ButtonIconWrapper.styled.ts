import styled from "styled-components";

const ButtonIconWrapper = styled.button<{ width: string; height: string }>`
	display: inline-block;
	width: 44px;
	height: 44px;

	font-size: 0;
	cursor: pointer;

	&:focus-visible {
		border-radius: 1px;
		outline: 2px solid blue;
	}

	& svg {
		width: ${({ width }) => width};
		height: ${({ height }) => height};

		fill: ${({ theme }) => theme.colors.contrastText};
	}
`;

export { ButtonIconWrapper };
