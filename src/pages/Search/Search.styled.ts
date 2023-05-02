import styled from "styled-components";

const Title = styled.h1`
    padding-left: 20px;
    margin-bottom: 1rem;

    & span {
        font-weight: 900;
    }
`;

const Subtitle = styled.h2`
    margin-bottom: 1rem;
`;

const Loader = styled.div`
    position: relative;
    width: 100%;
    height: 40vh;

    &::after {
        content: "";
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 50px);
        z-index: ${props => props.theme.order.other};
        display: block;

        width: 100px;
        height: 100px;

        border: 10px dashed black;
        border-radius: 50%;

        animation: loader 1.5s linear infinite;
    }

    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export {
    Title,
    Subtitle,
    Loader,
};