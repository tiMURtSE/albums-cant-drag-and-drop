import styled from "styled-components";

const Input = styled.input`
	display: none;
`;

const Wrapper = styled.div<{ numberOfTracks: number }>`
	border-radius: ${({ theme }) => theme.sizes.borderRadius};

	& input:checked + div {
		max-height: ${({ numberOfTracks }) => numberOfTracks}px;

		& span {
			&:first-child {
				transform: translate(-50%, 800%);
			}

			&:last-child {
				transform: translate(-50%, -50%);
			}
		}
	}

	@media ${({ theme }) => theme.media.extraLarge} {
		font-size: 14px;
	}

	@media ${({ theme }) => theme.media.small} {
		font-size: 12px;
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
		z-index: ${({ theme }) => theme.order.other};

		transform: translate(-50%, -50%);
		transition: transform 0.5s ease;

		&:last-child {
			transform: translate(-50%, -250%);
			transition: transform 0.2s ease;
		}
	}
`;

const Track = styled.tr`
	& td {
		padding: 12px 2rem;

		border-top: 2px solid ${({ theme }) => theme.colors.contrastText};

		&:first-child {
			width: 3rem;

			color: ${({ theme }) => theme.colors.primary.dark};

			@media ${({ theme }) => theme.media.extraLarge} {
				width: max-content;
				padding-right: 0;
			}
		}

		&:last-child {
			font-weight: 700;
		}

		@media ${({ theme }) => theme.media.extraLarge} {
			padding: 10px 1rem;
		}
	}
`;

export { Input, Wrapper, TableWrapper, Table, Caption, Label, Track };
