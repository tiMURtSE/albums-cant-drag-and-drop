import styled from "styled-components";

const Wrapper = styled.div`
	& input:checked + div span {
		transform: translateX(18px);
	}

	& input:checked + div svg:first-child {
		display: none;
	}

	& input:checked + div svg:last-child {
		display: block;
		fill: #fff;
	}
`;

const Toggle = styled.div`
	position: relative;
	display: block;
	width: 40px;
	height: 22px;
	border: 1px solid ${(props) => props.theme.colors.grey.neutral};
	background-color: ${(props) => props.theme.colors.grey.light};
	border-radius: 11px;
	cursor: pointer;
	transition: border-color 0.25s;
`;

const Input = styled.input`
	display: none;
`;

const Check = styled.span`
	position: absolute;
	top: 1px;
	left: 1px;
	width: 18px;
	height: 18px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.colors.primary};
	transition: transform 0.25s;

	& svg {
		position: absolute;
		top: 3px;
		left: 3px;
		width: 12px;
		height: 12px;
		fill: #000;

		&:last-child {
			display: none;
		}
	}
`;

export { Wrapper, Toggle, Input, Check };
