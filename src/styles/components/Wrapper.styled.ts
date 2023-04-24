import styled from "styled-components";

const Wrapper = styled.div`
    padding: 50px 20px;

    background-color: ${props => props.theme.colors.grey.light};
    border-radius: ${props => props.theme.sizes.borderRadius};
`;

export default Wrapper;