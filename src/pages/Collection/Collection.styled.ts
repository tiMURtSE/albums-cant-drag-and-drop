import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Wrapper = styled.div`
	padding: 1rem 0;

	border: 2px solid ${({ theme }) => theme.colors.contrastText};
	border-radius: ${({ theme }) => theme.radius.large};
`;

const Customizations = styled(FlexBetween)`
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 2rem;
	margin: 20px 0;
	padding: 0 1rem;
`;

const SearchAndFilter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const Input = styled.input`
	padding: 1rem 1rem 0;

	color: ${({ theme }) => theme.colors.contrastText};
	border-bottom: 2px solid ${({ theme }) => theme.colors.contrastText};

	&:focus {
		outline: none;
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

export { Wrapper, Customizations, Input, SearchAndFilter };
