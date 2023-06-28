import { InputHTMLAttributes, useState } from "react";
import { Label, Input, LabelCaption, Tip } from "./AuthInput.styled";
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
		<Label>
			<LabelCaption isShown={isFocused}>{label}</LabelCaption>

			<Input
				type="text"
				{...focusEventHandlers}
				{...props}
			/>

			{tip && <Tip>{tip}</Tip>}
		</Label>
	);
}

export default AuthInput;
