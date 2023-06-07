import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setIsAutocompleteOpen } from "store/autocompleteSlice";
import searchAlbums from "services/api/searchAlbums.api";
import { useAppDispatch, useAppSelector } from "hooks";
import { useDebounce } from "hooks/useDebounce";
import { useAutocompleteNavigation } from "hooks/useAutocompleteNavigation";
import { useAutocompleteNavigationSubmit } from "hooks/useAutocompleteNavigationSubmit";
import { formatAlbums } from "utils/formatAlbums";
import { IAlbum } from "types";
import { Loader } from "styles/components/Loader.styled";
import { Item, ItemLink, List, Wrapper } from "./Autocomplete.styled";

type Props = {
	query: string;
};

const TIMEOUT = 500;

const Autocomplete = ({ query }: Props) => {
	const debouncedValue = useDebounce(query, TIMEOUT);
	const [suggestions, setSuggestions] = useState<IAlbum[] | []>([]);
	const [selectedIndex, setSelectedIndex] = useAutocompleteNavigation(suggestions);
	const isAutocompleteOpen = useAppSelector((state) => state.autocomplete.isAutocompleteOpen);
	const [isLoading, setIsLoading] = useState(false);
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

		return formatAlbums(albums);
	};

	useEffect(() => {
		let ignore = false;

		if (debouncedValue) {
			setIsLoading(true);
			dispatch(setIsAutocompleteOpen({ isAutocompleteOpen: true }));

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
			closeAutocomplete();
			setSuggestions([]);
		}

		return () => {
			ignore = true;
		};
	}, [debouncedValue]);

	if (!isAutocompleteOpen) return null;

	return (
		<Wrapper id="autocomplete">
			{isLoading ? (
				<Loader
					width="100%"
					height="200px"
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
