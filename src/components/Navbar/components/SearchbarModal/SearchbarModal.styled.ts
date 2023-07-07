import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const SearchbarModalContent = styled.div`
	position: fixed;
	top: calc(100vh - 50vh);
	left: 50%;
	z-index: 20;
	transform: translate(-50%, -50%);

	height: 600px;
	padding: 2rem 0;

	background-color: ${({ theme }) => theme.colors.background.default};
	border: 1px solid ${({ theme }) => theme.colors.primary.light};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	box-shadow: 0 0 30px 0 ${({ theme }) => theme.colors.primary.light};
`;

const SearchbarModalHeader = styled(FlexBetween)`
	justify-content: flex-end;
	height: ${({ theme }) => theme.sizes.header.height};
`;

export { SearchbarModalContent, SearchbarModalHeader };
