import styled from "styled-components";

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;

	flex-basis: 47%;
`;

const TitleWrapper = styled.div`
	display: inline-block;

	& h2 {
		font-size: 24px;
	}

	& h2 a {
		padding: 8px 0;
	}

	& h2:hover svg:first-child {
		display: none;
	}

	& h2:hover svg:last-child {
		display: block;
	}
`;

const IconWrapper = styled.span`
	position: relative;

	& svg {
		position: absolute;
		top: 10%;
		right: -2rem;
		z-index: 10;
		width: 15px;
		height: 15px;
		fill: ${({ theme }) => theme.colors.contrastText};
	}

	& svg:last-child {
		display: none;
		top: 7%;
		right: -2.1rem;
		width: 20px;
		height: 20px;
	}
`;

const Artist = styled.h3`
	font-family: "Roboto Serif", serif;
	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 700;

	@media ${({ theme }) => theme.media.extraLarge} {
		font-size: 18px;
	}

	@media ${({ theme }) => theme.media.medium} {
		font-size: 14px;
	}
`;

const LikeButton = styled.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	width: 140px;
	margin-bottom: 2rem;
	padding: 5px 10px;

	color: ${({ theme }) => theme.colors.contrastText};
	background-color: ${({ theme }) => theme.colors.primary.neutral};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	cursor: pointer;

	& span {
		font-weight: 700;
	}

	& svg {
		fill: ${({ theme }) => theme.colors.contrastText};
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.secondary.main};
	}
`;

export { Content, TitleWrapper, IconWrapper, Artist, LikeButton };
