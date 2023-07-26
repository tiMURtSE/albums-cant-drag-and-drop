import styled from "styled-components";

const Container = styled.div<{ isLargeSize: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;

	text-align: center;
	font-size: ${({ isLargeSize, theme }) =>
		isLargeSize ? theme.fonts.extraLarge : theme.fonts.large};
	line-height: 1;

	& svg {
		width: ${({ isLargeSize }) => (isLargeSize ? "300px" : "200px")};
		height: ${({ isLargeSize }) => (isLargeSize ? "300px" : "200px")};
	}

	@media ${({ theme }) => theme.media.medium} {
		font-size: 24px;

		& svg {
			width: 210px;
			height: 210px;
		}
	}

	@media ${({ theme }) => theme.media.small} {
		font-size: 18px;

		& svg {
			width: 150px;
			height: 150px;
		}
	}
`;

export { Container };
