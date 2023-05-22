import styled from "styled-components";

const StylishAlbumTitle = styled.h2<{ isExtraLarge?: boolean }>`
	display: inline-block;

	font-family: "Roboto Serif", "Rubik", sans-serif;
	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 700;
	font-style: italic;
	letter-spacing: -2.5px;
	line-height: 1;

	font-size: ${({ isExtraLarge, theme }) =>
		isExtraLarge ? theme.fonts.extraLarge : theme.fonts.large};
`;

export default StylishAlbumTitle;
