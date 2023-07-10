import styled from "styled-components";

const Styled = styled.a`
	font-family: "Roboto Serif", "Rubik", sans-serif;
	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 700;
	font-style: italic;
	letter-spacing: -2.5px;
	line-height: 1;
`;

export default Styled;
