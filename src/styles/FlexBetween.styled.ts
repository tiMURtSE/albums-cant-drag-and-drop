import styled from 'styled-components';

const FlexBetween = styled.div<{margin?: string, gap?: string}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${(props) => props.gap};

    margin: ${(props) => props.margin};
`;

export default FlexBetween;