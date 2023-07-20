import { HTMLAttributes, ReactNode } from "react";
import * as Styled from "./IconButton.styled";

interface Props extends HTMLAttributes<HTMLButtonElement> {
	width?: string;
	height?: string;
	children: ReactNode;
}

function IconButton({ width = "20px", height = "20px", children, ...props }: Props) {
	return (
		<Styled.Button
			type="button"
			width={width}
			height={height}
			{...props}
		>
			{children}
		</Styled.Button>
	);
}

export default IconButton;
