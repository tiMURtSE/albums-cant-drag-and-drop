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

type Props = {
	query: string;
	isAutocompleteOpen: boolean;
	setIsAutocompleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleSearchSubmit: (event?: FormEvent<HTMLFormElement>) => Promise<void>;
};

const Autocomplete = ({
	query,
	isAutocompleteOpen,
	setIsAutocompleteOpen,
	handleSearchSubmit,
}: Props) => {
	const [isLoading, setIsLoading] = useState(false);
	const debouncedValue = useDebounce(query, 1000);
	const [suggestions, selectedIndex, setSuggestions] =
		useAutocompleteNavigation(isAutocompleteOpen);

	useAutocompleteNavigationSubmit({
		handleSearchSubmit,
		setIsAutocompleteOpen,
		suggestions,
		selectedIndex,
		isAutocompleteOpen,
	});

	const fetchAndFormatAlbums = async (): Promise<Array<IAlbum>> => {
		const response = await searchAlbums(query);
		const albums = response.albums.items;

		for (let i = 0; i < albums.length; i++) {
			albums[i] = formatAlbum(albums[i]);
		}

		return albums;
	};

	const fetchSuggestions = async () => {
		if (debouncedValue) {
			setIsLoading(true);
			setIsAutocompleteOpen(true);

			const suggestions = await fetchAndFormatAlbums();

			setIsLoading(false);
			setSuggestions(suggestions);
		} else {
			setIsAutocompleteOpen(false);
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
						<Item key={album.id} onClick={() => setIsAutocompleteOpen(false)}>
							<Link to={`/album/${album.id}`}>
								<ItemLink isFocused={selectedIndex === index}>
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
