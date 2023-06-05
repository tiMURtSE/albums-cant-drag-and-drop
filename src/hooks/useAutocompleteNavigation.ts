import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAlbum } from "types";

export const useAutocompleteNavigation = (query: string, isAutocompleteOpen: boolean) => {
	const [suggestions, setSuggestions] = useState<Array<IAlbum>>([]);
	const [selectedIndex, setSelectedIndex] = useState(-1);

	const handleNavigation = (event: any) => {
		if (event.key.includes("Arrow") || event.key.includes("Enter") || event.key.includes("Tab"))
			event.preventDefault();

		if (event.key === "ArrowUp" || (event.key === "Tab" && event.shiftKey)) {
			setSelectedIndex(
				selectedIndex === 0 || selectedIndex === -1
					? suggestions.length - 1
					: selectedIndex - 1
			);
		} else if (event.key === "ArrowDown" || event.key === "Tab") {
			setSelectedIndex(selectedIndex === suggestions.length - 1 ? 0 : selectedIndex + 1);
		}
	};

	useEffect(() => {
		if (isAutocompleteOpen) {
			document.addEventListener("keydown", handleNavigation);
		}

		return () => {
			document.removeEventListener("keydown", handleNavigation);
		};
	}, [isAutocompleteOpen, selectedIndex, query]);

	return [suggestions, selectedIndex, setSuggestions] as [
		IAlbum[],
		number,
		React.Dispatch<React.SetStateAction<IAlbum[]>>
	];
};
