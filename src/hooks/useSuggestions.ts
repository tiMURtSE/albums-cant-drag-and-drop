import { useAppDispatch } from "hooks";
import { useEffect, useState } from "react";
import searchAlbums from "services/api/searchAlbums.api";
import { closeAutocomplete, openAutocomplete } from "store/autocompleteSlice";
import { IAlbum } from "types";
import { formatAlbums } from "utils/formatAlbums";
import { useAutocompleteNavigation } from "./useAutocompleteNavigation";
import { useLocation } from "react-router-dom";

export const useSuggestions = (debouncedValue: string) => {
	const [suggestions, setSuggestions] = useState<IAlbum[] | []>([]);
	const { selectedIndex, setSelectedIndex } = useAutocompleteNavigation(suggestions);
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();

	const fetchAndFormatAlbums = async () => {
		const response = await searchAlbums(debouncedValue);
		const albums = response.albums.items;

		return formatAlbums(albums);
	};

	useEffect(() => {
		const isSearchPageOpen = pathname.includes("/search");
		let ignore = false;

		if (debouncedValue && !isSearchPageOpen) {
			dispatch(openAutocomplete());
			setIsLoading(true);

			fetchAndFormatAlbums()
				.then((suggestions) => {
					if (!ignore) {
						setSuggestions(suggestions);
						setIsLoading(false);
						setSelectedIndex(-1);
					}
				})
				.catch((error) => console.error(error));
		} else {
			dispatch(closeAutocomplete());
			setSuggestions([]);
		}

		return () => {
			ignore = true;
		};
	}, [debouncedValue]);

	return { suggestions, selectedIndex, isLoading };
};
