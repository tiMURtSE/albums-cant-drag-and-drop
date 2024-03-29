import { ButtonHTMLAttributes, ReactNode } from "react";
import * as Styled from "./Button.styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

function Button({ children, ...props }: Props) {
	return <Styled.Button>{children}</Styled.Button>;
}

export default Button;
