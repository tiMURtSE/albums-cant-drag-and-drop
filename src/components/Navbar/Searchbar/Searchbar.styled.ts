import styled from "styled-components";
import { theme } from "theme/theme";

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

const Autocomplete = styled.div``;

export { Content, Input, ClearSign, Autocomplete };
