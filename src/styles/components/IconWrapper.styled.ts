import styled from "styled-components";

const IconWrapper = styled.div<{ width: string; height: string }>`
	display: inline-block;
	padding: 5px;

	font-size: 0;
	cursor: pointer;

	& svg {
		width: ${({ width }) => width};
		height: ${({ height }) => height};

		fill: ${({ theme }) => theme.colors.contrastText};
	}
`;

export { IconWrapper };
