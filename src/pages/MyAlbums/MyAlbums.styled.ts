import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Wrapper = styled.div`
	padding: 1rem 0;

	border: 2px solid ${({ theme }) => theme.colors.contrastText};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

const Customizations = styled(FlexBetween)`
	margin: 20px 0;
	padding: 0 1rem;
`;

const SearchAndFilter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const Input = styled.input`
	padding: 0 1rem;

	color: ${({ theme }) => theme.colors.contrastText};
	border-bottom: 2px solid ${({ theme }) => theme.colors.contrastText};

	&:focus {
		outline: none;
	}
`;

export { Customizations, Wrapper, Input, SearchAndFilter };
