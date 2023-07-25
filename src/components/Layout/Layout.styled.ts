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

const Main = styled.main<{ isCurrentPageAlbum: boolean }>`
	flex-basis: calc(100vh - 0px);
	flex-grow: 1;
	flex-shrink: 0;
	padding: 164px 0 64px;

	@media ${({ theme }) => theme.media.large} {
		padding-top: ${({ isCurrentPageAlbum }) => (isCurrentPageAlbum ? "64px" : "164px")};
	}
`;

const Container = styled.div<{ header?: boolean }>`
	max-width: ${({ theme, header }) =>
		header ? theme.sizes.container.header : theme.sizes.container.list};
	margin: 0 auto;
`;

export { Page, Header, Main, Container };
