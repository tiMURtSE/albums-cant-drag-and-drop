import styled from "styled-components";

const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;

const Main = styled.main`
	flex-grow: 1;
	flex-shrink: 0;
	margin: 64px 0;
`;

export { Page, Main };
