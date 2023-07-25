import styled from "styled-components";

const Wrapper = styled.div`
	position: absolute;
	top: 45px;
	left: 0;
	width: 100%;
	min-height: 310px;

	background-color: ${(props) => props.theme.colors.primary.light};
	border: 1px solid ${(props) => props.theme.colors.primary.neutral};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.primary.neutral};

	@media ${({ theme }) => theme.media.extraLarge} {
		top: 80px;
	}
`;

const List = styled.ul`
	padding: 10px;
`;

const Item = styled.li`
	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.neutral};
		border-radius: ${({ theme }) => theme.sizes.borderRadius};
	}
`;

const ItemLink = styled.div<{ isFocused: boolean }>`
	width: 100%;
	padding: 5px 10px;

	background-color: ${({ isFocused, theme }) =>
		isFocused ? theme.colors.primary.neutral : "auto"};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

const Title = styled.div`
	font-weight: 700;
	color: ${({ theme }) => theme.colors.contrastText};
`;

const Artist = styled.div`
	color: ${({ theme }) => theme.colors.primary.dark};
`;

export { Wrapper, List, Item, ItemLink, Title, Artist };
