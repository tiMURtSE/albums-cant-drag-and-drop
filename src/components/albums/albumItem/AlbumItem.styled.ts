import styled from 'styled-components';
import FlexBetween from 'styles/FlexBetween.styled';

const Content = styled(FlexBetween)`
    gap: 2rem;

    padding: 0 40px;
`;

const Image = styled.div`

`;

const Info = styled.div`
    flex-grow: 1;
`;

const Title = styled.p`
    font-size: 88px;
    font-weight: 700;
    font-style: italic;
`;

export {
    Content,
    Image,
    Info,
    Title,
};