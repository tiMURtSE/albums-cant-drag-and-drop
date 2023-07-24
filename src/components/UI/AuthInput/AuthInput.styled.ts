import styled from "styled-components";

const Label = styled.label`
	position: relative;

	display: flex;
	flex-direction: column;
`;

const LabelCaption = styled.span<{ isShown: boolean }>`
	display: ${({ isShown }) => (isShown ? "block" : "none")};
	position: absolute;
	top: 0;
	left: 9px;
	z-index: 10;
	transform: translateY(-50%);

	padding: 0 5px;
	background-color: ${({ theme }) => theme.colors.background.default};

	font-style: italic;
`;

const Input = styled.input`
	position: relative;
	padding: 12px;

	font-weight: 700;
	color: ${({ theme }) => theme.colors.contrastText};
	border: 2px solid ${({ theme }) => theme.colors.contrastText};

	&:focus {
		outline: none;
	}
`;

const Tip = styled.span`
	padding: 5px 0;

	color: ${({ theme }) => theme.colors.secondary.danger};
	font-size: ${({ theme }) => theme.fonts.small};
	line-height: 1;

	@media ${({ theme }) => theme.media.small} {
		max-width: 320px;
	}
`;

export { Label, LabelCaption, Input, Tip };
