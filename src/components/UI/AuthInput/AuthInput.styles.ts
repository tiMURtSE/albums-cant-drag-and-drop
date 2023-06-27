import styled from "styled-components";

const Label = styled.label`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Input = styled.input`
	padding: 5px 12px;

	color: ${({ theme }) => theme.colors.contrastText};
	background-color: ${({ theme }) => theme.colors.primary.light};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};

	&:focus {
		outline: none;
	}
`;

export { Label, Input };
