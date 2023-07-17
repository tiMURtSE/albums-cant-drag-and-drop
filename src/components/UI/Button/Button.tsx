import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button.styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, ...props }: Props) {
	return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
