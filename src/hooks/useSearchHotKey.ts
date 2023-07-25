import { useEffect } from "react";

export const useSearchHotKey = (inputRef: React.RefObject<HTMLInputElement>) => {
	const handleKeyboardPress = (event: KeyboardEvent) => {
		const code = event.code;
		const isCtrlKey = event.ctrlKey;
		const isShiftKey = event.shiftKey;

		if (isCtrlKey && !isShiftKey && code === "KeyK") {
			event.preventDefault();
			const inputElement = inputRef.current;

			if (!inputElement) return;

			if (document.activeElement === inputElement) {
				inputElement.blur();
			} else {
				inputElement.focus();
			}
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyboardPress);

		return () => document.removeEventListener("keydown", handleKeyboardPress);
	}, []);
};
