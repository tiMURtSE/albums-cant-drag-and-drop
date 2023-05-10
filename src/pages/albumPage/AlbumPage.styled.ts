import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Content = styled(FlexBetween)`
	align-items: flex-start;
	margin: 100px 0;
`;

const AlbumCover = styled.div`
	flex-basis: 450px;

	box-shadow: 5px 5px 25px 10px ${(props) => props.theme.colors.grey.neutral};
`;

export { Content, AlbumCover };
