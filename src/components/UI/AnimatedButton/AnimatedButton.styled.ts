import styled from "styled-components";

const StyledButton = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	width: max-content;
	min-height: 40px;
	padding: 8px 24px;
	border-radius: 9999px;

	background: radial-gradient(
		circle,
		rgba(28, 221, 255, 1) 0%,
		rgba(255, 174, 66, 1) 50%,
		rgba(162, 112, 245, 1) 100%
	);
	background-size: 200% 100%;
	box-shadow: 0 0 15px -5px #70e1f5;
	font-weight: 700;

	transition: animation 0.2s ease-in-out;
	animation: gradient 10s infinite cubic-bezier(0.62, 0.28, 0.23, 0.99) both;

	cursor: pointer;

	&:hover {
		box-shadow: 0 0 20px -5px #70e1f5;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	&:focus-visible {
		outline: 3px solid ${({ theme }) => theme.colors.secondary.blue};
		outline-offset: 3px;
		box-shadow: none;
	}

	& svg {
		width: 20px;
		height: 20px;
	}
`;

export { StyledButton };
