import styled from "styled-components";

const AlbumWrapper = styled.div`
    padding: 10px 40px;

    border-radius: ${props => props.theme.sizes.borderRadius};

    transition: all .1s ease;

    &:hover {
        background-color: #faffd6;
    }
`;

export default AlbumWrapper;