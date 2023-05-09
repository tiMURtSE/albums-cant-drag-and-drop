import styled from "styled-components";

const Input = styled.input`
	display: none;
`;

const Wrapper = styled.div`
	border-radius: ${(props) => props.theme.sizes.borderRadius};

	& input + div {
		max-height: 44px;
		overflow: hidden;

		transition: max-height 0.2s ease;
	}

	& input:checked + div {
		max-height: 1500px;
	}

	& input:checked + div svg {
		transform: translateY(-50%) rotate(90deg);
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
	text-align: start;
	padding: 0 40px;

	background-color: ${(props) => props.theme.colors.grey.neutral};
	border-radius: ${(props) => props.theme.sizes.borderRadius};

	& label {
		display: block;
		width: 100%;
		padding: 10px 0;

		cursor: pointer;
	}

	& svg {
		position: absolute;
		top: 50%;
		left: 10px;
		z-index: 10;
		width: 20px;
		height: 20px;
		transform: translateY(-50%);
	}

	&:hover {
		background-color: ${(props) => props.theme.colors.yellow.light};
	}
`;

const Track = styled.tr`
	border-bottom: 1px solid #999;
`;

export { Input, Wrapper, Table, Caption, Track };
