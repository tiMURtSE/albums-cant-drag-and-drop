import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button.styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string;
}

function Button({ children, ...props }: Props) {
	return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
