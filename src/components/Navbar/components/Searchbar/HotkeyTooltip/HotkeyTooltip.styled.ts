import styled from "styled-components";

const Wrapper = styled.div`
	position: absolute;
	top: 50%;
	right: 18px;
	z-index: ${({ theme }) => theme.order.other};
	transform: translateY(-50%);
`;

const InnerKbd = styled.kbd`
	padding: 2px 3px 1px;
	border: 1px solid ${({ theme }) => theme.colors.primary.neutral};
	border-radius: 3px;

	font-family: "Inter", sans-serif;
	font-size: 12px;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.primary.dark};
`;

export { Wrapper, InnerKbd };
