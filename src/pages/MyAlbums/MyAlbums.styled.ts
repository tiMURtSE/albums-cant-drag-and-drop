import styled from "styled-components";
import FlexBetween from "styles/components/FlexBetween.styled";

const AlbumCollectionWrapper = styled.div`
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

export { Customizations, AlbumCollectionWrapper, Input, SearchAndFilter, ChangeOrderButton };
