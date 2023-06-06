import { Loader } from "styles/components/Loader.styled";
import { Item, ItemLink, List, Wrapper } from "./Autocomplete.styled";
import { Link } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { useAutocompleteNavigation } from "hooks/useAutocompleteNavigation";
import { useAutocompleteNavigationSubmit } from "hooks/useAutocompleteNavigationSubmit";
import { useDebounce } from "hooks/useDebounce";
import { IAlbum } from "types";
import searchAlbums from "services/api/searchAlbums.api";
import formatAlbum from "utils/formatAlbum";
import { useAppDispatch, useAppSelector } from "hooks";
import { setIsAutocompleteOpen } from "store/autocompleteSlice";

type Props = {
	query: string;
};

const Autocomplete = ({ query }: Props) => {
	const [suggestions, setSuggestions] = useState<IAlbum[] | []>([]);
	const [isLoading, setIsLoading] = useState(false);
	const isAutocompleteOpen = useAppSelector((state) => state.autocomplete.isAutocompleteOpen);
	const debouncedValue = useDebounce(query, 1000);
	const [selectedIndex, setSelectedIndex] = useAutocompleteNavigation(suggestions);
	const dispatch = useAppDispatch();

	const closeAutocomplete = () => {
		dispatch(setIsAutocompleteOpen({ isAutocompleteOpen: false }));
	};

	useAutocompleteNavigationSubmit({
		query,
		suggestions,
		selectedIndex,
	});

	const fetchAndFormatAlbums = async () => {
		const response = await searchAlbums(debouncedValue);
		const albums = response.albums.items;

		for (let i = 0; i < albums.length; i++) {
			albums[i] = formatAlbum(albums[i]);
		}

		return albums;
	};

	const fetchSuggestions = async () => {
		if (debouncedValue) {
			setIsLoading(true);
			dispatch(setIsAutocompleteOpen({ isAutocompleteOpen: true }));

			const suggestions = await fetchAndFormatAlbums();

			setSuggestions(suggestions);
			setIsLoading(false);
			setSelectedIndex(-1);
		}
	};

	useEffect(() => {
		fetchSuggestions();
	}, [debouncedValue]);

	if (!isAutocompleteOpen) return null;

	return (
		<Wrapper id="autocomplete">
			{isLoading ? (
				<Loader
					width="100%"
					height="100px"
					contentWidth="25px"
					contentHeight="25px"
					border="3px"
				/>
			) : (
				<List id="search-list">
					{suggestions.map((album, index) => (
						<Item key={album.id}>
							<Link to={`/album/${album.id}`} onClick={closeAutocomplete}>
								<ItemLink isFocused={index === selectedIndex}>
									{album.title}
								</ItemLink>
							</Link>
						</Item>
					))}
				</List>
			)}
		</Wrapper>
	);
};

export default Autocomplete;
