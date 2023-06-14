import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 1rem;

	& svg {
		fill: ${({ theme }) => theme.colors.contrastText};
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100px;
`;

const Item = styled.div`
	padding: 0.5rem;

	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 700;
	color: ${({ theme }) => theme.colors.contrastText};
`;

const ArrowButton = styled.button`
	& svg {
		fill: ${({ theme, disabled }) =>
			disabled ? theme.colors.primary.neutral : theme.colors.primary.dark};
	}
`;

export { Wrapper, Content, Item, ArrowButton };
