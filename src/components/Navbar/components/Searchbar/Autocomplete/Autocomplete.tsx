import { Link } from "react-router-dom";
import { closeAutocomplete } from "store/reducers/autocompleteSlice";
import { isAutocompleteOpenSelector } from "store/selectors/isAutocompleteOpenSelector";
import { useAppDispatch, useAppSelector } from "hooks";
import { useAutocompleteNavigationSubmit } from "hooks/useAutocompleteNavigationSubmit";
import { useDebounce } from "hooks/useDebounce";
import { useSuggestions } from "hooks/useSuggestions";
import { Loader } from "styles/components/Loader.styled";
import * as Styled from "./Autocomplete.styled";

type Props = {
	query: string;
};

const DEBOUNCE_DELAY = 500;

const Autocomplete = ({ query }: Props) => {
	const debouncedValue = useDebounce(query, DEBOUNCE_DELAY);
	const { suggestions, selectedIndex, isLoading } = useSuggestions(debouncedValue);
	const isAutocompleteOpen = useAppSelector(isAutocompleteOpenSelector);
	const dispatch = useAppDispatch();

	useAutocompleteNavigationSubmit({
		query,
		suggestions,
		selectedIndex,
	});

	if (!isAutocompleteOpen) return null;

	return (
		<Styled.Wrapper id="autocomplete">
			{isLoading ? (
				<Loader
					width="100%"
					height="200px"
					contentWidth="25px"
					contentHeight="25px"
					border="3px"
				/>
			) : (
				<Styled.List id="search-list">
					{suggestions.map((album, index) => (
						<Styled.Item key={album.id}>
							<Link
								to={`/album/${album.id}`}
								className="search-list__item"
								onClick={() => dispatch(closeAutocomplete())}
							>
								<Styled.ItemLink isFocused={index === selectedIndex}>
									<Styled.Title>{album.title}</Styled.Title>

									<Styled.Artist>{album.artist}</Styled.Artist>
								</Styled.ItemLink>
							</Link>
						</Styled.Item>
					))}
				</Styled.List>
			)}
		</Styled.Wrapper>
	);
};

export default Autocomplete;
