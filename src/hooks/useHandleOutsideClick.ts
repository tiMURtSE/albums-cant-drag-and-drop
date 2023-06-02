import { useEffect, useState } from "react";

export const useHandleOutsideClick = (
	dependecy: boolean,
	selectors: string[],
	callback: () => void
) => {
	const handleClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;

		for (let i = 0; i < selectors.length; i++) {
			if (target.closest(selectors[i])) return;
		}

		callback();
	};

	useEffect(() => {
		if (dependecy) {
			document.addEventListener("click", handleClick);
		}

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [dependecy]);
};
