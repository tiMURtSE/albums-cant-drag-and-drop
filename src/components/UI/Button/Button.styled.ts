import styled from "styled-components";

const Button = styled.button`
	display: inline-block;
	width: max-content;
	min-height: 40px;
	padding: 8px 24px;
	border-radius: 9999px;

	background-color: ${({ theme }) => theme.colors.contrastText};
	color: ${({ theme }) => theme.colors.background.default};
	font-weight: 700;
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 17px -5px ${({ theme }) => theme.colors.contrastText};
	}

	&:focus-visible {
		outline: 3px solid ${({ theme }) => theme.colors.secondary.blue};
		outline-offset: 3px;
	}
`;

export { Button };
