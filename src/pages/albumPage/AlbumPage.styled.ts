import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Content = styled(FlexBetween)`
	align-items: flex-start;
	margin: 100px 0;
`;

const AlbumCover = styled.div`
	flex-basis: 47%;
`;

export { Content, AlbumCover };
