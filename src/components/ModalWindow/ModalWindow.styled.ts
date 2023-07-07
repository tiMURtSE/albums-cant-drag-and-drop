import styled from "styled-components";

const ModalWindowWrapper = styled.dialog`
	padding: 0;
	border: none;

	&::backdrop {
		background-color: rgb(0 0 0 / 0.5);
	}
`;

export { ModalWindowWrapper };
