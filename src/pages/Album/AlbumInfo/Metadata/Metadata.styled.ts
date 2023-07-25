import styled from "styled-components";

const Table = styled.table`
	border-collapse: collapse;

	/* @media ${({ theme }) => theme.media.extraLarge} {
		font-size: 14px;
	}

	@media ${({ theme }) => theme.media.small} {
		font-size: 12px;
	} */
`;

const TableRow = styled.tr`
	&:last-child td {
		border: none;
	}
`;

const FirstTableData = styled.td`
	width: 120px;
	padding: 1rem 0;

	color: ${({ theme }) => theme.colors.primary.dark};
	border-bottom: 1px solid ${({ theme }) => theme.colors.primary.neutral};
	@media ${({ theme }) => theme.media.small} {
		padding: 0.5rem 0;
	}
`;

const SecondTableData = styled.td`
	padding: 1rem 0;

	border-bottom: 1px solid ${({ theme }) => theme.colors.primary.neutral};

	@media ${({ theme }) => theme.media.small} {
		padding: 0.5rem 0;
	}
`;

const Tag = styled.span`
	display: inline-block;
	margin: 3px 0;
	padding: 0px 5px;

	background-color: ${({ theme }) => theme.colors.primary.neutral};
	border-radius: 5px;
	word-break: break-all;

	&:not(:last-child) {
		margin-right: 5px;
	}

	@media ${({ theme }) => theme.media.small} {
		font-size: 14px;
	}
`;

const SpecialFont = styled.span`
	font-weight: 700;
`;

export { Table, TableRow, FirstTableData, SecondTableData, Tag, SpecialFont };
