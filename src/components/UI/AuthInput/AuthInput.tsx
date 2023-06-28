import { InputHTMLAttributes, useState } from "react";
import { Label, Input } from "./AuthInput.styles";
import { useInputAndLabelInteraction } from "hooks/useInputAndLabelInteraction";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	tip: string;
}

function AuthInput({ label, tip, ...props }: Props) {
	const { isFocused, onFocus, onBlur } = useInputAndLabelInteraction(label);
	const focusEventHandlers = {
		onFocus,
		onBlur,
	};

	return (
		<Label label={label} isShown={isFocused}>
			<Input type="text" {...focusEventHandlers} {...props} />
			{tip && <span>{tip}</span>}
		</Label>
	);
}

export default AuthInput;
