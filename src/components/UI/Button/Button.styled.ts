import styled from "styled-components";

const StyledButton = styled.button`
	width: max-content;
	min-height: 40px;
	padding: 12px 2rem;

	font-weight: 700;
	color: ${({ theme }) => theme.colors.contrastText};
	background-color: ${({ theme }) => theme.colors.primary.light};
	border-radius: 9999px;

	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.neutral};
	}

	&:focus {
		outline: 2px solid;
	}
`;
export { StyledButton };
