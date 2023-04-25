import styled from "styled-components";
import { theme } from "styles/theme/theme";

const { light, neutral, dark } = theme.colors.grey;

const Content = styled.div`
    position: relative;
`;

const Input = styled.input`
    position: relative;
    padding: 5px 20px;
    border: 0;

    border: 1px solid ${neutral};
    border-radius: 10rem;
    
    &:focus {
        outline: none;
        border: 1px solid ${dark};
    }

    &::placeholder {
        color: ${dark};
    }
`;

const ClearSign = styled.div<{ search?: string }>`
    display: ${props => props.search ? 'block' : 'none'};
    padding: 10px;

    position: absolute;
    top: 50%;
    right: 5px;
    z-index: ${theme.order.other};
    transform: translateY(-53%);

    color: ${dark};
    font-size: ${theme.fonts.small};
    cursor: pointer;
`;

const Autocomplete = styled.div`
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;

    background-color: ${light};
    border-radius: ${theme.sizes.borderRadius};
    box-shadow: 0px 0px 10px 2px ${neutral};
`;

const List = styled.ul`
    padding: 10px;

    & span {
        padding: 5px 10px;
    }
`;

const Item = styled.li`
    &:hover {
        background-color: ${neutral};
        border-radius: ${theme.sizes.borderRadius};
    }
`;

const ItemLink = styled.a`
    display: block;
    width: 100%;
    padding: 5px 10px;
`;

export {
    Content,
    Input,
    ClearSign,
    Autocomplete,
    List,
    Item,
    ItemLink,
}