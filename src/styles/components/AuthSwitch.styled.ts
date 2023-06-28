import styled from "styled-components";

const AuthSwitch = styled.span`
	color: ${({ theme }) => theme.colors.primary.dark};
	font-size: ${({ theme }) => theme.fonts.small};

	& button {
		color: ${({ theme }) => theme.colors.contrastText};
		cursor: pointer;

		&:focus {
			outline: none;
			text-decoration: 2px underline;
		}
	}
`;

export { AuthSwitch };
