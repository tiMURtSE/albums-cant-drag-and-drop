import { FocusEvent, useState } from "react";

export const useInputAndLabelInteraction = (label: string) => {
	const [isFocused, setIsFocused] = useState(false);

	const onFocus = (event: FocusEvent<HTMLInputElement>) => {
		setIsFocused(true);
		event.target.placeholder = "";
	};

	const onBlur = (event: FocusEvent<HTMLInputElement>) => {
		const value = event.target.value;

		if (!value) {
			setIsFocused(false);
			event.target.placeholder = label;
		}
	};

	return {
		isFocused,
		onFocus,
		onBlur,
	};
};
