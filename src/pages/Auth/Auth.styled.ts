import styled from "styled-components";

const AuthWrapper = styled.div`
	width: 400px;
	margin: 0 auto;
	padding: 2rem;

	border: 2px solid ${({ theme }) => theme.colors.contrastText};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	& button {
		margin-top: 1rem;
	}
`;

export { AuthWrapper, Form };
