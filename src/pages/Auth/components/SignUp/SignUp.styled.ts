import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	& button {
		margin-top: 1rem;
	}
`;

const LoginSuggestion = styled.span`
	color: ${({ theme }) => theme.colors.primary.dark};
	font-size: ${({ theme }) => theme.fonts.small};

	& span {
		color: ${({ theme }) => theme.colors.contrastText};
		cursor: pointer;
	}
`;

export { Form, LoginSuggestion };
