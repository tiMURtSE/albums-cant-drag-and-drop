import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const Wrapper = styled.div`
	padding: 1rem 0;

	border: 2px solid ${({ theme }) => theme.colors.contrastText};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

const Customizations = styled(FlexBetween)`
	align-items: flex-start;
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

const ChangeOrderButton = styled.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	/* width: 140px; */
	padding: 5px 10px;
	color: rgb(238, 238, 238);
	background-color: rgb(71, 71, 71);
	border-radius: 12px;
	cursor: pointer;

	&:hover {
		background-color: rgb(89, 86, 61);
	}
`;

export { Customizations, Wrapper, Input, SearchAndFilter, ChangeOrderButton };
