import styled from "styled-components";

const Container = styled.div<{header?: boolean}>`
    max-width: ${props => 
        props.header
        ? props.theme.sizes.container.header
        : props.theme.sizes.container.content
    };
    margin: 0 auto;
    margin-top: ${props => props.header ? '0px' : '218px'};
`;

export default Container;