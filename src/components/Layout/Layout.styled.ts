import styled from "styled-components";

const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;

const Header = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: ${({ theme }) => theme.order.header};
	width: 100%;

	backdrop-filter: saturate(180%) blur(5px);
`;

const Main = styled.main`
	flex-grow: 1;
	flex-shrink: 0;
	margin: 64px 0;
	padding: 100px 0;
`;

const Container = styled.div<{ header?: boolean }>`
	max-width: ${({ theme, header }) =>
		header ? theme.sizes.container.header : theme.sizes.container.list};
	margin: 0 auto;
`;

export { Page, Header, Main, Container };
