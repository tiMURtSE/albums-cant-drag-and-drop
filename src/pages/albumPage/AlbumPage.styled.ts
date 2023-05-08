import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Content = styled(FlexBetween)`
	align-items: flex-start;
`;

const FLexColumn = styled.div<{ gap?: string }>`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: ${(props) => props.gap};
	flex-basis: 47%;
`;

export { Content, FLexColumn };
