import styled from "styled-components";

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;

	& th,
	td {
		padding-right: 1.5rem;

		:first-child {
			padding-left: 1rem;
		}
		:last-child {
			padding-right: 40px;
		}

		@media ${({ theme }) => theme.media.small} {
			padding-right: 0.5rem;
		}
	}
`;

export { Table };
