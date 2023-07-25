import styled from "styled-components";
import { theme } from "theme/theme";

const Container = styled.div`
	position: relative;
	width: 350px;

	@media ${({ theme }) => theme.media.small} {
		width: 300px;
	}
`;

const Input = styled.input`
	position: relative;
	width: 100%;
	padding: 5px 35px 5px 20px;

	color: ${({ theme }) => theme.colors.contrastText};
	border: 1px solid ${({ theme }) => theme.colors.primary.dark};
	border-radius: 9999px;

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

const ClearSign = styled.div`
	position: absolute;
	top: 50%;
	right: 5px;
	z-index: ${theme.order.other};
	transform: translateY(-50%);

	padding: 10px;

	color: ${({ theme }) => theme.colors.contrastText};
	font-size: ${theme.fonts.small};
	cursor: pointer;
`;

const KbdWrapper = styled.div`
	position: absolute;
	top: 50%;
	right: 18px;
	z-index: ${theme.order.other};
	transform: translateY(-50%);

	& kbd kbd {
		padding: 2px 3px 1px;
		border: 1px solid ${({ theme }) => theme.colors.primary.neutral};
		border-radius: 3px;

		font-family: "Inter", sans-serif;
		font-size: 12px;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.primary.dark};
	}
`;

export { Container, Input, ClearSign, KbdWrapper };
