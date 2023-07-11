import styled from "styled-components";

const Paddings = styled.div`
	padding: 0 32px;

	@media ${({ theme }) => theme.media.small} {
		padding: 0 12px;
	}
`;

export { Paddings };
