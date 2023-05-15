import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearFoundAlbums, setFoundAlbums } from "store/albumsSlice";
import { Albums } from "types";
import formatAlbum from "utils/formatAlbum";
import searchAlbums from "services/api/search.api";
import { Loader } from "styles/components/Loader.styled";
import {
	Autocomplete,
	ClearSign,
	Content,
	Input,
	Item,
	ItemLink,
	List,
} from "./Searchbar.styled";

const Search = () => {
	const [query, setQuery] = useState<string>("");
	const [suggestions, setSuggestions] = useState<Albums>([]);
	const [isAutocompleteOpen, setIsAutocompleteOpen] =
		useState<boolean>(false);
	const [selectedIndex, setSelectedIndex] = useState<number>(-1);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const getAlbums = async (): Promise<Albums> => {
		const results = await searchAlbums(query);
		const albums = results.albums.items as Albums;

		for (let i = 0; i < albums.length; i++) {
			albums[i] = formatAlbum(albums[i]);
		}

		return albums;
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
		setIsAutocompleteOpen(true);
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(clearFoundAlbums());

		const albums = await getAlbums();

		dispatch(setFoundAlbums({ albums }));
		navigate(`/search/${query}`);
		setIsAutocompleteOpen(false);
	};

	const handleOutsideClick = async (event: MouseEvent) => {
		const target = event.target as HTMLElement;

		if (!target.closest("#input") && !target.closest("#autocomplete")) {
			setIsAutocompleteOpen(false);
		}
	};

	const handleNavigation = (event: KeyboardEvent) => {
		if (
			event.key.includes("Arrow") ||
			event.key.includes("Enter") ||
			event.key.includes("Tab")
		)
			event.preventDefault();

		if (
			event.key === "ArrowUp" ||
			(event.key === "Tab" && event.shiftKey)
		) {
			setSelectedIndex(
				selectedIndex === 0 || selectedIndex === -1
					? suggestions.length - 1
					: selectedIndex - 1
			);
		} else if (event.key === "ArrowDown" || event.key === "Tab") {
			setSelectedIndex(
				selectedIndex === suggestions.length - 1 ? 0 : selectedIndex + 1
			);
		} else if (event.key === "Enter") {
			if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
				const albumId = suggestions[selectedIndex].id;

				navigate(`/album/${albumId}`);
				setIsAutocompleteOpen(false);
				setSelectedIndex(0);
			}
		}
	};

	useEffect(() => {
		if (!query) {
			return setIsAutocompleteOpen(false);
		}

		setIsLoading(true);

		const timer = setTimeout(async () => {
			if (query) {
				const albums = await getAlbums();

				setSuggestions(albums);
				setIsLoading(false);
			}
		}, 500);

		return () => {
			clearTimeout(timer);
			setIsLoading(false);
		};
	}, [query]);

	useEffect(() => {
		if (isAutocompleteOpen) {
			document.addEventListener("keydown", handleNavigation);
		}

		return () => {
			document.removeEventListener("keydown", handleNavigation);
		};
	}, [isAutocompleteOpen, selectedIndex]);

	useEffect(() => {
		if (isAutocompleteOpen) {
			document.addEventListener("click", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("click", handleOutsideClick);
			setSelectedIndex(-1);
		};
	}, [isAutocompleteOpen]);

	return (
		<Content>
			<form onSubmit={onSubmit}>
				<Input
					id="input"
					type="search"
					placeholder="Поиск..."
					autoComplete="off"
					value={query}
					onChange={onChange}
				/>
			</form>

			{isAutocompleteOpen && (
				<Autocomplete id="autocomplete">
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
								<Item
									key={album.id}
									onClick={() => setIsAutocompleteOpen(false)}
								>
									<Link to={`/album/${album.id}`}>
										<ItemLink
											isFocused={selectedIndex === index}
										>
											{album.title}
										</ItemLink>
									</Link>
								</Item>
							))}
						</List>
					)}
				</Autocomplete>
			)}

			<ClearSign query={query} onClick={() => setQuery("")}>
				&#9587;
			</ClearSign>
		</Content>
	);
};

export default Search;
