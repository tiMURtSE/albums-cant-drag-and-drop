import styled from "styled-components";

const Table = styled.table`
	width: 100%;

	& thead tr:last-child {
		text-align: start;
		background-color: red;
	}
`;

const Track = styled.tr`
	border-bottom: 1px solid #999;
`;

const Duration = styled.td`
	text-align: end;
`;

const Name = styled.td`
	padding-left: 2rem;
`;

export { Table, Track, Duration, Name };
