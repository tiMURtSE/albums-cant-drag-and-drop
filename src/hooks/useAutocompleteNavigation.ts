import { useEffect, useState } from "react";
import { IAlbum } from "types";

type ReturnValue = [IAlbum[], number, React.Dispatch<React.SetStateAction<IAlbum[]>>];

export const useAutocompleteNavigation = (isAutocompleteOpen: boolean) => {
	const [suggestions, setSuggestions] = useState<Array<IAlbum>>([]);
	const [selectedIndex, setSelectedIndex] = useState(-1);

	const handleNavigation = (event: KeyboardEvent) => {
		const key = event.key;
		let updatedIndex = 0;

		if (
			key.includes("Tab") ||
			key.includes("ArrowUp") ||
			key.includes("ArrowDown") ||
			key.includes("Enter")
		)
			event.preventDefault();

		if (key === "ArrowUp" || (key === "Tab" && event.shiftKey)) {
			const lastItemIndex = suggestions.length - 1;

			updatedIndex = selectedIndex < 1 ? lastItemIndex : selectedIndex - 1;
		} else if (key === "ArrowDown" || key === "Tab") {
			const lastItemIndex = suggestions.length - 1;

			updatedIndex = selectedIndex === lastItemIndex ? 0 : selectedIndex + 1;
		} else {
			return;
		}

		setSelectedIndex(updatedIndex);
	};

	useEffect(() => {
		if (isAutocompleteOpen) document.addEventListener("keydown", handleNavigation);

		return () => document.removeEventListener("keydown", handleNavigation);
	}, [isAutocompleteOpen, selectedIndex, suggestions]);

	return [suggestions, selectedIndex, setSuggestions] as ReturnValue;
};
