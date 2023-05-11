import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearFoundAlbums, setFoundAlbums } from "store/albumsSlice";
import formatAlbum from "utils/formatAlbum";
import searchAlbums from "services/api/search.api";
import { Albums } from "types";
import {
	Autocomplete,
	ClearSign,
	Content,
	Input,
	Item,
	ItemLink,
	List,
} from "./Searchbar.styled";
import { Loader } from "components/Loading/Loader.styled";

const Search = () => {
	const [query, setQuery] = useState<string>("");
	const [autocomplete, setAutocomplete] = useState<Albums>([]);
	const [isAutocompleteOpen, setIsAutocompleteOpen] =
		useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(clearFoundAlbums());

		const results = await searchAlbums(query);
		const albums = results.albums.items as Albums;

		for (let i = 0; i < albums.length; i++) {
			albums[i] = formatAlbum(albums[i]);
		}

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

	useEffect(() => {
		setIsLoading(true);

		const timer = setTimeout(async () => {
			if (query) {
				const results = await searchAlbums(query);
				const albums = results.albums.items as Albums;

				for (let i = 0; i < albums.length; i++) {
					albums[i] = formatAlbum(albums[i]);
				}

				setAutocomplete(albums);
				setIsLoading(false);
			}
		}, 1000);

		return () => {
			clearTimeout(timer);
			setIsLoading(false);
		};
	}, [query]);

	useEffect(() => {
		if (isAutocompleteOpen)
			document.addEventListener("click", handleOutsideClick);

		return () => {
			document.removeEventListener("click", handleOutsideClick);
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
					onChange={(event) => {
						setQuery(event.target.value);
						setIsAutocompleteOpen(true);
					}}
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
						<List>
							{autocomplete.map((album) => (
								<Item
									key={album.id}
									onClick={() => setIsAutocompleteOpen(false)}
								>
									<ItemLink>
										<Link to={`/album/${album.id}`}>
											{album.title}
										</Link>
									</ItemLink>
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
