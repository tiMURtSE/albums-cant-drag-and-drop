import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setIsAutocompleteOpen } from "store/autocompleteSlice";
import { useAppDispatch, useAppSelector } from "hooks";
import { IAlbum } from "types";

type Parameters = {
	query: string;
	suggestions: IAlbum[];
	selectedIndex: number;
};

export const useAutocompleteNavigationSubmit = ({
	query,
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
				navigate(`/search/${query}`);
				dispatch(setIsAutocompleteOpen({ isAutocompleteOpen: false }));
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
	}, [isAutocompleteOpen, selectedIndex]);
};
