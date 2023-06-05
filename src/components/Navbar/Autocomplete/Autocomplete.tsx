import { Loader } from "styles/components/Loader.styled";
import { Item, ItemLink, List, Wrapper } from "./Autocomplete.styled";
import { Link } from "react-router-dom";
import { FormEvent } from "react";
import { useAutocompleteNavigation } from "hooks/useAutocompleteNavigation";
import { useAutocompleteNavigationSubmit } from "hooks/useAutocompleteNavigationSubmit";
import { useDebounce } from "hooks/useDebounce";

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

	const isLoading = useDebounce({
		query,
		setSuggestions,
		setIsAutocompleteOpen,
	});

	useAutocompleteNavigationSubmit({
		handleSearchSubmit,
		setIsAutocompleteOpen,
		suggestions,
		selectedIndex,
		isAutocompleteOpen,
	});

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
