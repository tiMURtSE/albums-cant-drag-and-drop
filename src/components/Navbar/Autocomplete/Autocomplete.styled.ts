import styled from "styled-components";

const Wrapper = styled.div`
	position: absolute;
	top: 45px;
	left: 0;
	width: 100%;

	background-color: ${(props) => props.theme.colors.primary.light};
	border: 1px solid ${(props) => props.theme.colors.primary.neutral};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.primary.neutral};
`;

const List = styled.ul`
	padding: 10px;

	& span {
		padding: 5px 10px;
	}
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
	cursor: pointer;

	background-color: ${(props) => (props.isFocused ? props.theme.colors.primary.neutral : "auto")};
	border-radius: ${(props) => (props.isFocused ? props.theme.sizes.borderRadius : "auto")};
`;

export { Wrapper, List, Item, ItemLink };
