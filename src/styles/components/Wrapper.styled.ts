import styled from "styled-components";

const Wrapper = styled.div`
	padding: 50px 20px;

	background-color: ${({ theme }) => theme.colors.primary.light};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

export default Wrapper;
