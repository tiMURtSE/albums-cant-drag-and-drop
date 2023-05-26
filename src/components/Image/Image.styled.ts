import styled from "styled-components";

const Wrapper = styled.div<{ width: string; height: string }>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};

	& img {
		display: block;
		max-width: none;
	}
`;

export { Wrapper };
