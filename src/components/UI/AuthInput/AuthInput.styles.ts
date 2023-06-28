import styled from "styled-components";

const Label = styled.label<{ label: string; isShown: boolean }>`
	position: relative;

	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	&::after {
		display: ${({ isShown }) => (isShown ? "block" : "none")};
		content: "${({ label }) => label}";
		position: absolute;
		top: 0;
		left: 4%;
		z-index: 10;
		transform: translateY(-50%);

		padding: 0 5px;
		background-color: ${({ theme }) => theme.colors.background.default};
	}
`;

const Input = styled.input`
	position: relative;
	padding: 12px;

	color: ${({ theme }) => theme.colors.contrastText};
	border: 2px solid ${({ theme }) => theme.colors.contrastText};
	/* background-color: ${({ theme }) => theme.colors.primary.light}; */
	/* border-radius: ${({ theme }) => theme.sizes.borderRadius}; */

	&:focus {
		outline: none;
	}
`;

export { Label, Input };
