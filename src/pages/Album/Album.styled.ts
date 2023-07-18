import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Content = styled(FlexBetween)`
	align-items: flex-start;

	@media ${({ theme }) => theme.media.medium} {
		flex-direction: column;
		gap: 2rem;
	}
`;

const AlbumCover = styled.div`
	width: 50%;

	box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.primary.light};

	@media ${({ theme }) => theme.media.medium} {
		width: 80%;
	}

	@media ${({ theme }) => theme.media.small} {
		width: 100%;
	}
`;

export { Content, AlbumCover };
