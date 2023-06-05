import { Loader } from "styles/components/Loader.styled";
import { Item, ItemLink, List, Wrapper } from "./Autocomplete.styled";
import { Link } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { IAlbum } from "types";
import searchAlbums from "services/api/searchAlbums.api";
import formatAlbum from "utils/formatAlbum";
import { useAutocompleteNavigation } from "hooks/useAutocompleteNavigation";
import { useAutocompleteNavigationSubmit } from "hooks/useAutocompleteNavigationSubmit";

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
	const [suggestions, selectedIndex, setSuggestions] =
		useAutocompleteNavigation(isAutocompleteOpen);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const fetchAndFormatAlbums = async (): Promise<Array<IAlbum>> => {
		const response = await searchAlbums(query);
		const albums = response.albums.items;

		for (let i = 0; i < albums.length; i++) {
			albums[i] = formatAlbum(albums[i]);
		}

		return albums;
	};

	useAutocompleteNavigationSubmit({
		handleSearchSubmit,
		setIsAutocompleteOpen,
		suggestions,
		selectedIndex,
		isAutocompleteOpen,
	});

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
