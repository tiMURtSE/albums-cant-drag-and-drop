import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks";
import { useDebounce } from "hooks/useDebounce";
import { useAutocompleteNavigationSubmit } from "hooks/useAutocompleteNavigationSubmit";
import { Loader } from "styles/components/Loader.styled";
import { Artist, Item, ItemLink, List, Title, Wrapper } from "./Autocomplete.styled";
import { closeAutocomplete } from "store/autocompleteSlice";
import { useSuggestions } from "hooks/useSuggestions";

type Props = {
	query: string;
};

const TIMEOUT = 500;

const Autocomplete = ({ query }: Props) => {
	const debouncedValue = useDebounce(query, TIMEOUT);
	const { suggestions, selectedIndex, isLoading } = useSuggestions(debouncedValue);
	const isAutocompleteOpen = useAppSelector((state) => state.autocomplete.isAutocompleteOpen);
	const dispatch = useAppDispatch();

	useAutocompleteNavigationSubmit({
		query,
		suggestions,
		selectedIndex,
	});

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
							<Link
								to={`/album/${album.id}`}
								onClick={() => dispatch(closeAutocomplete())}
							>
								<ItemLink isFocused={index === selectedIndex}>
									<Title>{album.title}</Title>
									<Artist>{album.artist}</Artist>
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
