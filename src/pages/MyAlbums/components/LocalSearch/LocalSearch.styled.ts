import styled from "styled-components";

const Input = styled.input`
	padding: 0 1rem;

	border-bottom: 2px solid ${({ theme }) => theme.colors.contrastText};

	&:focus {
		outline: none;
	}
`;

export { Input };
