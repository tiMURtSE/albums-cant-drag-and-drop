import styled from "styled-components";

const Input = styled.input`
	display: none;
`;

const Wrapper = styled.div`
	min-height: fit-content;
	padding: 10px 20px;

	background-color: #fff;
	border-radius: ${(props) => props.theme.sizes.borderRadius};

	& input + div {
		overflow: hidden;
		max-height: 1500px;
		transition: max-height 0.5s ease;
	}
	& input:checked + div {
		max-height: 44px;
	}

	& input:checked + div svg {
		transform: translate(150%, -50%) rotate(-90deg);
	}
`;

const Table = styled.table`
	width: 100%;

	border-collapse: collapse;

	& td {
		padding: 10px 20px;
		border-bottom: 3px solid ${(props) => props.theme.colors.grey.neutral};
	}

	& tr:last-child td {
		border-color: transparent;
	}
`;

const Caption = styled.caption`
	position: relative;
	background-color: ${(props) => props.theme.colors.grey.neutral};
	border-top-left-radius: ${(props) => props.theme.sizes.borderRadius};
	border-top-right-radius: ${(props) => props.theme.sizes.borderRadius};

	& label {
		display: block;
		width: 100%;
		padding: 10px 0;

		cursor: pointer;
	}

	& svg {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 10;
		width: 20px;
		height: 20px;
		transform: translate(150%, -50%);
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

export { Input, Wrapper, Table, Caption, Track, Duration, Name };
