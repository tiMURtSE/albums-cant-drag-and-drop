import { useEffect } from "react";

export const useHandleOutsideClick = (
	dependency: boolean,
	innerSelectors: string[],
	callback: () => void
) => {
	const handleClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		const hasMatch = innerSelectors.some((selector) => target.closest(selector));

		if (!hasMatch) callback();
	};

	useEffect(() => {
		if (dependency) document.addEventListener("click", handleClick);

		return () => document.removeEventListener("click", handleClick);
	}, [dependency]);
};
