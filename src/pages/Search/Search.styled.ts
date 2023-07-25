import styled from "styled-components";

const Title = styled.h2`
	margin-bottom: 1rem;

	font-size: 32px;
	line-height: 1;

	& span {
		font-weight: 900;
	}

	@media ${({ theme }) => theme.media.medium} {
		font-size: 24px;
	}
`;

export { Title };
