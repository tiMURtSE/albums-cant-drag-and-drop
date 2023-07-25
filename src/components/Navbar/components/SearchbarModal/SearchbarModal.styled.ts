import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const SearchbarModalContent = styled.div`
	position: fixed;
	top: 0;
	left: 50%;
	z-index: 20;
	transform: translate(-50%, -120%);

	padding: 2rem 0;
	border: 1px solid ${({ theme }) => theme.colors.primary.light};
	border-bottom-right-radius: ${({ theme }) => theme.sizes.borderRadius};
	border-bottom-left-radius: ${({ theme }) => theme.sizes.borderRadius};

	background-color: ${({ theme }) => theme.colors.background.default};
	box-shadow: 0 0 20px -10px #333;

	transition: all 0.1s ease;
`;

const SearchbarModalHeader = styled(FlexBetween)`
	justify-content: flex-end;
	height: ${({ theme }) => theme.sizes.header.height};
`;

const Title = styled.h2`
	margin-bottom: 1rem;
	padding-left: 5px;

	font-size: ${({ theme }) => theme.fonts.large};
	color: ${({ theme }) => theme.colors.contrastText};
`;

export { SearchbarModalContent, SearchbarModalHeader, Title };
