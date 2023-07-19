import styled from "styled-components";

const Info = styled.div`
	& h3 {
		line-height: 1;
	}

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
