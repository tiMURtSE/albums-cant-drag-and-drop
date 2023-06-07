import { useEffect } from "react";

export const useHandleOutsideClick = (
	dependencies: boolean,
	innerSelectors: string[],
	callback: () => void
) => {
	const handleClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		const hasMatch = innerSelectors.some((selector) => target.closest(selector));

		if (!hasMatch) callback();
	};

	useEffect(() => {
		if (dependencies) document.addEventListener("click", handleClick);

		return () => document.removeEventListener("click", handleClick);
	}, [dependencies]);
};
