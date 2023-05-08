import styled from "styled-components";

const Title = styled.p`
	margin-bottom: 1rem;

	font-family: "Roboto Serif", serif;
	font-size: ${({ theme }) => theme.fonts.extraLarge};
	font-weight: 700;
	line-height: 1;
	letter-spacing: -2.5px;
`;

const Artist = styled.p`
	font-family: "Roboto Serif", serif;
	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 700;
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

export { Title, Artist, Tag, SpecialFont };
