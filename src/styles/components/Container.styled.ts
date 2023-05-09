import styled from "styled-components";

const Container = styled.div<{ header?: boolean }>`
	max-width: ${(props) =>
		props.header
			? props.theme.sizes.container.header
			: props.theme.sizes.container.list};
	margin: 0 auto;
`;

export default Container;
