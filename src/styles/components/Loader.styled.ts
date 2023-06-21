import styled from "styled-components";

const Loader = styled.div<{
	width: string;
	height: string;
	contentWidth: string;
	contentHeight: string;
	border: string;
}>`
	position: relative;
	width: ${({ width }) => width};
	height: ${({ height }) => height};

	&::after {
		content: "";
		position: absolute;
		top: calc(50% - calc(${({ contentHeight }) => contentHeight} / 2));
		left: calc(50% - calc(${({ contentWidth }) => contentWidth} / 2));
		z-index: ${({ theme }) => theme.order.other};
		display: block;

		width: ${({ contentWidth }) => contentWidth};
		height: ${({ contentHeight }) => contentHeight};

		border: ${({ border }) => border} dashed ${({ theme }) => theme.colors.contrastText};
		border-radius: 50%;

		animation: rotation 1.5s cubic-bezier(0.86, 0.29, 0.55, 0.95) infinite;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export { Loader };
