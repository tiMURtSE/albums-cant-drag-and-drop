import { InputHTMLAttributes } from "react";
import { Label, Input } from "./AuthInput.styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	tip: string;
}

function AuthInput({ label, tip, ...props }: Props) {
	return (
		<Label>
			{label && <span>{label}</span>}

			<Input type="text" {...props} />

			{tip && <span>{tip}</span>}
		</Label>
	);
}

export default AuthInput;
