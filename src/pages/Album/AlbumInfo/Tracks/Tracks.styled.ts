import styled from "styled-components";

const Input = styled.input`
	display: none;
`;

const Wrapper = styled.div`
	border-radius: ${({ theme }) => theme.sizes.borderRadius};

	& input:checked + div {
		max-height: 2000px;

		& caption {
			height: 43px;
		}

		& span {
			&:first-child {
				transform: translate(-50%, 800%);
			}

			&:last-child {
				transform: translate(-50%, -50%);
			}
		}
	}
`;

const TableWrapper = styled.div`
	max-height: 46px;
	overflow: hidden;

	transition: max-height 0.4s ease;
	border: 2px solid ${({ theme }) => theme.colors.contrastText};
	border-radius: 2rem;
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;

	& td {
		padding: 12px 2rem;

		border-top: 2px solid ${({ theme }) => theme.colors.contrastText};

		&:first-child {
			width: 5rem;
		}
	}
`;

const Caption = styled.caption`
	height: 43px;
`;

const Label = styled.label`
	position: relative;
	display: inline-block;
	width: 100%;
	height: 100%;

	overflow: hidden;
	cursor: pointer;

	& span {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 10;

		transform: translate(-50%, -50%);
		transition: transform 0.5s ease;

		&:last-child {
			transform: translate(-50%, -200%);
		}
	}
`;

const Track = styled.tr``;

export { Input, Wrapper, TableWrapper, Table, Caption, Label, Track };
