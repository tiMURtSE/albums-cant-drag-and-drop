import styled from "styled-components";

const StylishAlbumTitle = styled.h2<{ isExtraLarge?: boolean }>`
	display: inline-block;

	font-family: "Roboto Serif", "Rubik", sans-serif;
	font-size: ${({ theme }) => theme.fonts.extraLarge};
	font-weight: 700;
	font-style: italic;
	letter-spacing: -2.5px;
	line-height: 1;

	@media ${({ theme }) => theme.media.extraLarge} {
		font-size: 34px;
	}

	@media ${({ theme }) => theme.media.small} {
		font-size: 22px;
		letter-spacing: -1px;
	}
`;

export default StylishAlbumTitle;
