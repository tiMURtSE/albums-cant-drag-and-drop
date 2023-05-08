import styled from "styled-components";

const Container = styled.div<{ header?: boolean; mt?: string }>`
	max-width: ${(props) =>
		props.header
			? props.theme.sizes.container.header
			: props.theme.sizes.container.list};
	margin: 0 auto;
	margin-top: ${(props) => (props.header ? "0px" : "218px")};
	margin-top: ${(props) => props.mt};
`;

export default Container;
