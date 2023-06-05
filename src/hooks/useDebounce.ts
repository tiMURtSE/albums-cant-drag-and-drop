import { SetStateAction, useEffect, useState } from "react";
import searchAlbums from "services/api/searchAlbums.api";
import { IAlbum } from "types";
import formatAlbum from "utils/formatAlbum";
import formatAlbums from "utils/formatAlbum";

type Parameters = {
	query: string;
	setSuggestions: React.Dispatch<SetStateAction<IAlbum[]>>;
	setIsAutocompleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useDebounce = ({ query, setSuggestions, setIsAutocompleteOpen }: Parameters) => {
	const [lastCall, setLastCall] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [lastCallTimeOut, setLastCallTimeOut] = useState(0);

	const fetchAndFormatAlbums = async (): Promise<Array<IAlbum>> => {
		const response = await searchAlbums(query);
		const albums = response.albums.items;

		for (let i = 0; i < albums.length; i++) {
			albums[i] = formatAlbum(albums[i]);
		}

		return albums;
	};

	const fetchSuggestions = async () => {
		if (!query) {
			return setIsAutocompleteOpen(false);
		}

		setIsLoading(true);
		setIsAutocompleteOpen(true);

		const suggestions = await fetchAndFormatAlbums();

		setIsLoading(false);
		setSuggestions(suggestions);
	};

	const debounce = (callee: () => Promise<void>, timeout: number) => {
		return function perform() {
			let previousCall = lastCall;

			setLastCall(Date.now());

			if (previousCall && lastCall - previousCall <= timeout) {
				clearTimeout(lastCallTimeOut);
			}

			setLastCallTimeOut(
				setTimeout(() => {
					callee();
				}, timeout)
			);
		};
	};

	useEffect(() => {
		const debounceFetchSuggestions = debounce(fetchSuggestions, 1000);

		debounceFetchSuggestions();
	}, [query]);

	return isLoading;
};
