import { useEffect, useState } from "react";
import searchAlbums from "services/api/searchAlbums.api";
import { IAlbum } from "types";
import formatAlbums from "utils/formatAlbum";

export const useDebounce = (query: string, setIsAutocompleteOpen) => {
	const [isLoading, setIsLoading] = useState(false);
	const [suggestions, setSuggestions] = useState<Array<IAlbum>>([]);

	const fetchAndFormatAlbums = async (): Promise<Array<IAlbum>> => {
		const response = await searchAlbums(query);
		const albums = response.albums.items;

		return formatAlbums(albums);
	};

	useEffect(() => {
		if (!query) {
			return setIsAutocompleteOpen(false);
		}

		setIsLoading(true);

		const timer = setTimeout(async () => {
			if (query) {
				const albums = await fetchAndFormatAlbums();

				setSuggestions(albums);
				setIsLoading(false);
			}
		}, 500);

		return () => {
			clearTimeout(timer);
			setIsLoading(false);
		};
	}, [query]);
};
