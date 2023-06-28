import styled from "styled-components";

const FlexColumn = styled.div<{ gap?: string }>`
	display: flex;
	flex-direction: column;
	gap: ${({ gap }) => gap};
`;

export default FlexColumn;
