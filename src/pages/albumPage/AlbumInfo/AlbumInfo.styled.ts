import styled from "styled-components";

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	flex-basis: 47%;
`;

const Title = styled.p`
	margin-bottom: 1rem;

	font-family: "Roboto Serif", serif;
	font-size: ${({ theme }) => theme.fonts.extraLarge};
	font-weight: 700;
	line-height: 1;
	letter-spacing: -2.5px;

	&:hover svg:first-child {
		display: none;
	}

	&:hover svg:last-child {
		display: block;
	}

	& span {
		position: relative;
	}

	& svg {
		position: absolute;
		top: 10%;
		right: -2rem;
		z-index: 10;
		width: 15px;
		height: 15px;
	}

	& svg:last-child {
		display: none;
		top: 7%;
		right: -2.1rem;
		width: 20px;
		height: 20px;
	}
`;

const Artist = styled.p`
	margin-bottom: 2rem;

	font-family: "Roboto Serif", serif;
	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 700;
`;

const LikeButton = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;
	width: min-content;
	margin-bottom: 2rem;
	padding: 5px 10px;

	background-color: ${(props) => props.theme.colors.grey.neutral};
	border-radius: ${(props) => props.theme.sizes.borderRadius};
	cursor: pointer;

	& span {
		font-weight: 700;
	}

	&:hover {
		background-color: ${(props) => props.theme.colors.yellow.light};
		border-color: ${(porps) => porps.theme.colors.grey.dark};
	}
`;

const AdditionalInfo = styled.div`
	margin-bottom: 2rem;
`;

const Tag = styled.span`
	display: inline-block;
	margin: 3px 0;
	padding: 0px 5px;

	background-color: ${(props) => props.theme.colors.grey.neutral};
	border-radius: 5px;
	word-break: break-all;

	&:not(:last-child) {
		margin-right: 5px;
	}
`;

const SpecialFont = styled.span`
	font-weight: 700;
`;

export { Content, Title, Artist, LikeButton, AdditionalInfo, Tag, SpecialFont };
