import styled from "styled-components";

const AlbumWrapper = styled.div`
	border-radius: ${(props) => props.theme.sizes.borderRadius};

	transition: all 0.1s ease;

	&:hover {
		background-color: ${(props) => props.theme.colors.secondary.main};
	}
`;

export default AlbumWrapper;
