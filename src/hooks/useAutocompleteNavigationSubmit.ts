import { useAppDispatch, useAppSelector } from "hooks";
import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setIsAutocompleteOpen } from "store/autocompleteSlice";
import { IAlbum } from "types";

type Parameters = {
	handleSearchSubmit: (event?: FormEvent<HTMLFormElement>) => Promise<void>;
	suggestions: IAlbum[];
	selectedIndex: number;
};

export const useAutocompleteNavigationSubmit = ({
	handleSearchSubmit,
	suggestions,
	selectedIndex,
}: Parameters) => {
	const isAutocompleteOpen = useAppSelector((state) => state.autocomplete.isAutocompleteOpen);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleSearch = (event: KeyboardEvent) => {
		const key = event.key;

		if (key === "Enter") {
			if (selectedIndex === -1) {
				handleSearchSubmit();
			} else {
				const albumId = suggestions[selectedIndex].id;

				navigate(`/album/${albumId}`);
				dispatch(setIsAutocompleteOpen({ isAutocompleteOpen: false }));
			}
		}
	};

	useEffect(() => {
		if (isAutocompleteOpen) document.addEventListener("keydown", handleSearch);

		return () => document.removeEventListener("keydown", handleSearch);
	}, [selectedIndex, isAutocompleteOpen]);
};
