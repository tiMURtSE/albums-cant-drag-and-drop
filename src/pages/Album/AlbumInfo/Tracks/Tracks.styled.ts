import styled from "styled-components";

const Input = styled.input`
	display: none;
`;

const Wrapper = styled.div`
	border-radius: ${({ theme }) => theme.sizes.borderRadius};

	& input + div {
		max-height: 46px;
		overflow: hidden;

		transition: max-height 0.2s ease;
	}

	& input:checked + div {
		max-height: 1500px;
	}

	& input:checked + div caption {
		height: 43px;
		background-color: ${({ theme }) => theme.colors.secondary.danger};
	}

	& input:checked + div label span {
		&:first-child {
			transform: translate(-300%, -50%);
		}

		&:last-child {
			transform: translate(-50%, -50%);
		}
	}

	& input:checked + div svg {
		transform: translateY(-50%) rotate(90deg);
	}
`;

const TableWrapper = styled.div`
	border: 2px solid ${({ theme }) => theme.colors.primary.dark};
	border-radius: 2rem;
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;

	& td {
		padding: 12px 2rem;

		border-top: 2px solid ${({ theme }) => theme.colors.primary.dark};

		&:first-child {
			width: 5rem;
		}
	}
`;

const Caption = styled.caption`
	height: 43px;

	transition: background-color 0.5s ease;
`;

const Label = styled.label`
	position: relative;
	display: inline-block;
	width: 100%;
	height: 100%;

	cursor: pointer;

	& span {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 10;

		transform: translate(-50%, -50%);
		transition: transform 0.5s ease;

		&:last-child {
			transform: translate(300%);
		}
	}
`;

const Track = styled.tr``;

// const Table = styled.table`
// 	width: 100%;
// 	border-collapse: collapse;

// 	& td {
// 		padding: 10px 20px;
// 		border-bottom: 3px solid ${({ theme }) => theme.colors.primary.neutral};
// 	}

// 	& tr:last-child td {
// 		border-color: transparent;
// 	}
// `;

// const Caption = styled.caption`
// 	position: relative;
// 	text-align: start;

// 	background-color: ${({ theme }) => theme.colors.primary.neutral};
// 	border-radius: ${({ theme }) => theme.sizes.borderRadius};

// 	& label {
// 		display: block;
// 		width: 100%;
// 		padding: 10px 40px;

// 		cursor: pointer;
// 	}

// 	& svg {
// 		position: absolute;
// 		top: 50%;
// 		left: 10px;
// 		z-index: 10;
// 		width: 20px;
// 		height: 20px;
// 		transform: translateY(-50%);
// 		fill: ${({ theme }) => theme.colors.contrastText};
// 	}

// 	&:hover {
// 		background-color: ${({ theme }) => theme.colors.secondary.main};
// 	}
// `;

// const Track = styled.tr`
// 	border-bottom: 1px solid #999;
// `;

export { Input, Wrapper, TableWrapper, Table, Caption, Label, Track };
