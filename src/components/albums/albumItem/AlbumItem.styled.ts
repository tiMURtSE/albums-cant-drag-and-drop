import styled from 'styled-components';
import FlexBetween from 'styles/FlexBetween.styled';

const Content = styled(FlexBetween)<{place: number}>`
    position: relative;
    gap: 2rem;

    padding: 0 40px 0 80px;

    &::before {
        content: '${props => props.place}';
        position: absolute;
        top: 50%;
        left: 40px;
        z-index: 10;
        transform: translate(-50%, -50%);

        font-size: 24px;
        font-weight: 700;
    }
`;

const Image = styled.div`

    & img {
        display: block;
        max-width: none;
    }
`;

const Info = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    height: 200px;
    padding-bottom: 1rem;
`;

const Title = styled.p`
    padding-bottom: 1rem;
    border-bottom: 3px solid #000;

    font-family: 'Roboto Serif', serif;
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    line-height: 1;
    letter-spacing: -2.5px;
`;

const ArtistAndYear = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    padding-left: 1rem;
`;

const Artist = styled.p`
    font-family: 'Roboto Serif', serif;
    font-size: 24px;
    font-weight: 700;
`;

const Year = styled.p`
    position: relative;

    color: ${props => props.theme.colors.grey.dark};
`;

export {
    Content,
    Image,
    Info,
    Title,
    ArtistAndYear,
    Artist,
    Year,
};