import styled from "styled-components";

const FlexBetween = styled.div<{ gap?: string }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: ${(props) => props.gap};
`;

export default FlexBetween;
