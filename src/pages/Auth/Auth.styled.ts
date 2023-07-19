import styled from "styled-components";

const AuthWrapper = styled.div`
	width: 400px;
	margin: 0 auto;
	padding-left: 0.5rem;

	@media ${({ theme }) => theme.media.small} {
		width: 300px;
	}
`;
export { AuthWrapper };
