import styled from "styled-components";

const StyledButton = styled.button`
	width: 200px;
	padding: 0.5rem 1rem;

	color: ${({ theme }) => theme.colors.contrastText};
	background-color: ${({ theme }) => theme.colors.primary.light};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};

	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.neutral};
	}
`;
export { StyledButton };
