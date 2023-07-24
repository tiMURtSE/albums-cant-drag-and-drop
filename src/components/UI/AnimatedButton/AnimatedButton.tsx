import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./AnimatedButton.styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

function Button({ children, ...props }: Props) {
	return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
