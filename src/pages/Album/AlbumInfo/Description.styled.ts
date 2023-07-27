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

	& a:hover ~ span svg:first-child {
		display: none;
	}

	& a:hover ~ span svg:last-child {
		display: block;
	}

	@media ${({ theme }) => theme.media.small} {
		& h2 {
			padding-right: 15px;
			font-size: 24px;
		}
	}
`;

const IconWrapper = styled.span`
	position: relative;

	& svg {
		position: absolute;
		top: 22%;
		right: -2rem;
		z-index: 10;
		width: 15px;
		height: 15px;
		fill: ${({ theme }) => theme.colors.contrastText};

		@media ${({ theme }) => theme.media.small} {
			right: -22px;
		}
	}

	& svg:last-child {
		display: none;
		top: 19%;
		right: -2.1rem;
		width: 20px;
		height: 20px;

		@media ${({ theme }) => theme.media.small} {
			right: -25px;
		}
	}
`;

const Artist = styled.h3`
	font-family: "Roboto Serif", serif;
	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 700;

	@media ${({ theme }) => theme.media.extraLarge} {
		font-size: 18px;
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
