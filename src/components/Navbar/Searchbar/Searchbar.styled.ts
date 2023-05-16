import styled from "styled-components";
import { theme } from "styles/theme/theme";

const Content = styled.div`
	position: relative;
`;

const Input = styled.input`
	position: relative;
	padding: 5px 35px 5px 20px;

	color: ${({ theme }) => theme.colors.contrastText};
	border: 0;
	border: 1px solid ${({ theme }) => theme.colors.primary.dark};
	border-radius: 10rem;

	&:focus {
		outline: none;
		border: 1px solid ${({ theme }) => theme.colors.contrastText};
	}

	&::placeholder {
		color: ${({ theme }) => theme.colors.contrastText};
	}

	&::-ms-clear {
		display: none;
	}
`;

const ClearSign = styled.div<{ query?: string }>`
	display: ${(props) => (props.query ? "block" : "none")};
	padding: 10px;

	position: absolute;
	top: 50%;
	right: 5px;
	z-index: ${theme.order.other};
	transform: translateY(-53%);

	color: ${({ theme }) => theme.colors.contrastText};
	font-size: ${theme.fonts.small};
	cursor: pointer;
`;

const Autocomplete = styled.div`
	position: absolute;
	top: 45px;
	left: 0;
	width: 100%;

	background-color: ${(props) => props.theme.colors.primary.light};
	border: 1px solid ${(props) => props.theme.colors.primary.neutral};
	border-radius: ${theme.sizes.borderRadius};
	box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.primary.neutral};
`;

const List = styled.ul`
	padding: 10px;

	& span {
		padding: 5px 10px;
	}
`;

const Item = styled.li`
	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.neutral};
		border-radius: ${theme.sizes.borderRadius};
	}
`;

const ItemLink = styled.div<{ isFocused: boolean }>`
	width: 100%;
	padding: 5px 10px;
	cursor: pointer;

	background-color: ${(props) => (props.isFocused ? props.theme.colors.primary.neutral : "auto")};
	border-radius: ${(props) => (props.isFocused ? props.theme.sizes.borderRadius : "auto")};
`;

export { Content, Input, ClearSign, Autocomplete, List, Item, ItemLink };
