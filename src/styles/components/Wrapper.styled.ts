import styled from "styled-components";

const Wrapper = styled.div`
	padding: 50px;

	background-color: ${({ theme }) => theme.colors.primary.light};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};

	@media ${({ theme }) => theme.media.medium} {
		padding: 50px 25px;
	}

	@media ${({ theme }) => theme.media.small} {
		padding: 25px 10px;
	}
`;

export default Wrapper;
