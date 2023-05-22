import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Content = styled(FlexBetween)`
	align-items: flex-start;
`;

const AlbumCover = styled.div`
	flex-basis: 450px;

	box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.primary.light};
`;

export { Content, AlbumCover };
