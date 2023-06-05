import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IAlbum } from "types";

type Parameters = {
	handleSearchSubmit: (event?: FormEvent<HTMLFormElement>) => Promise<void>;
	setIsAutocompleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
	suggestions: IAlbum[];
	selectedIndex: number;
	isAutocompleteOpen: boolean;
};

export const useAutocompleteNavigationSubmit = ({
	handleSearchSubmit,
	setIsAutocompleteOpen,
	suggestions,
	selectedIndex,
	isAutocompleteOpen,
}: Parameters) => {
	const navigate = useNavigate();

	const handleSearch = (event: KeyboardEvent) => {
		const key = event.key;

		if (key === "Enter") {
			if (selectedIndex === -1) {
				handleSearchSubmit();
			} else {
				const albumId = suggestions[selectedIndex].id;

				navigate(`/album/${albumId}`);
				setIsAutocompleteOpen(false);
			}
		}
	};

	useEffect(() => {
		if (isAutocompleteOpen) document.addEventListener("keydown", handleSearch);

		return () => document.removeEventListener("keydown", handleSearch);
	}, [selectedIndex, isAutocompleteOpen]);
};
