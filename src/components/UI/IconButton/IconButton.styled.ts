import styled from "styled-components";

const Button = styled.button<{ width: string; height: string }>`
	display: inline-block;
	width: 40px;
	height: 40px;

	font-size: 0;
	cursor: pointer;

	&:focus-visible {
		border-radius: 1px;
		outline: 2px solid ${({ theme }) => theme.colors.secondary.blue};
	}

	& svg {
		width: ${({ width }) => width};
		height: ${({ height }) => height};

		fill: ${({ theme }) => theme.colors.contrastText};
	}
`;

export { Button };
