import styled from "styled-components";

const ModalWindowWrapper = styled.dialog`
	display: block;
	padding: 0;
	border: none;

	visibility: hidden;

	&[open] {
		visibility: visible;

		& #search {
			transform: translate(-50%, -1%);
		}

		& #side-navbar-for-animation {
			transform: translate(0%, 0%);
		}
	}

	&::backdrop {
		background-color: rgb(0 0 0 / 0.25);
	}
`;

export { ModalWindowWrapper };
