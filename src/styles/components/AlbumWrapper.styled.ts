import styled from "styled-components";

const AlbumWrapper = styled.div`
	padding: 10px 40px;

	border-radius: ${(props) => props.theme.sizes.borderRadius};

	transition: all 0.1s ease;

	&:hover {
		background-color: ${(props) => props.theme.colors.yellow.light};
	}
`;

export default AlbumWrapper;
