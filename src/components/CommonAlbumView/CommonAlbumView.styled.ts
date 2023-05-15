import styled from "styled-components";

const Info = styled.div`
	& a {
		display: block;
	}
`;

const Like = styled.div`
	width: 30px;
	height: 30px;
	padding: 5px;

	cursor: pointer;

	& svg {
		fill: ${({ theme }) => theme.colors.contrastText};
	}
`;

export { Info, Like };
