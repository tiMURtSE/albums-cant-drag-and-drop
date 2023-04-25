import styled from "styled-components";

const Content = styled.div`
position: relative;

& div {
    position: absolute;
    top: 35px;
    left: 0;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.grey.light};
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
}

& ul {
    padding: 10px;
}

& li {
    &:hover {
        background-color: ${({ theme }) => theme.colors.grey.neutral};
        border-radius: ${({ theme }) => theme.sizes.borderRadius};
    }

    & a {
        display: block;
        width: 100%;
        padding: 5px 10px;
    }
}
`;

export {
    Content,
}