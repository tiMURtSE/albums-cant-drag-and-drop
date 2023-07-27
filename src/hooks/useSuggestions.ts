import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { closeAutocomplete, openAutocomplete } from "store/autocompleteSlice";
import { useAppDispatch } from "hooks";
import searchAlbums from "services/api/searchAlbums.api";
import { IAlbum } from "types";
import { formatAlbums } from "utils/formatAlbums";
import { useAutocompleteNavigation } from "./useAutocompleteNavigation";

export const useSuggestions = (debouncedValue: string) => {
	const [suggestions, setSuggestions] = useState<IAlbum[] | []>([]);
	const { selectedIndex, setSelectedIndex } = useAutocompleteNavigation(suggestions);
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();

	const fetchAndFormatAlbums = async () => {
		try {
			const response = await searchAlbums(debouncedValue);
			const albums = response.albums.items;

			return formatAlbums(albums);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const isSearchPageOpen = pathname.includes("/search");

		if (debouncedValue && !isSearchPageOpen) {
			dispatch(openAutocomplete());
			setIsLoading(true);

			fetchAndFormatAlbums()
				.then((suggestions) => {
					if (suggestions?.length) {
						setSuggestions(suggestions);
						setIsLoading(false);
						setSelectedIndex(-1);
					} else {
						dispatch(closeAutocomplete());
						setSuggestions([]);
						setIsLoading(false);
						setSelectedIndex(-1);
					}
				})
				.catch((error) => console.error(error));
		} else {
			dispatch(closeAutocomplete());
			setSuggestions([]);
		}
	}, [debouncedValue]);

	return { suggestions, selectedIndex, isLoading };
};
