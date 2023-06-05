import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearFoundAlbums, setFoundAlbums } from "store/albumsSlice";
import { IAlbum } from "types";
import searchAlbums from "services/api/searchAlbums.api";
import { ClearSign, Content, Input } from "./Searchbar.styled";
import { useHandleOutsideClick } from "hooks/useHandleOutsideClick";
import formatAlbum from "utils/formatAlbum";
import Autocomplete from "../Autocomplete/Autocomplete";
import { useAppDispatch } from "hooks";

const Search = () => {
	const [query, setQuery] = useState("");
	const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);
	const insideClickSelectors = ["#input", "#autocomplete"];

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleQuery = (event: ChangeEvent<HTMLInputElement>) => {
		const query = event.target.value;

		setQuery(query);
	};

	const fetchAndFormatAlbums = async (): Promise<Array<IAlbum>> => {
		const response = await searchAlbums(query);
		const albums = response.albums.items;

		for (let i = 0; i < albums.length; i++) {
			albums[i] = formatAlbum(albums[i]);
		}

		return albums;
	};

	const handleSearchSubmit = async (event?: FormEvent<HTMLFormElement>) => {
		if (event) event.preventDefault();

		const albums = await fetchAndFormatAlbums();
		const input = document.querySelector(insideClickSelectors[0]) as HTMLElement;

		if (input) input.blur();

		dispatch(clearFoundAlbums());
		dispatch(setFoundAlbums({ albums }));
		navigate(`/search/${query}`);
		setIsAutocompleteOpen(false);
	};

	const closeAutocomplete = () => {
		setIsAutocompleteOpen(false);
	};

	useHandleOutsideClick(isAutocompleteOpen, insideClickSelectors, closeAutocomplete);

	return (
		<Content>
			<form onSubmit={handleSearchSubmit}>
				<Input
					id="input"
					type="text"
					placeholder="Поиск..."
					autoComplete="off"
					value={query}
					onChange={handleQuery}
				/>
			</form>

			{/* {isAutocompleteOpen && ( */}
			<Autocomplete
				query={query}
				isAutocompleteOpen={isAutocompleteOpen}
				setIsAutocompleteOpen={setIsAutocompleteOpen}
				handleSearchSubmit={handleSearchSubmit}
			/>
			{/* )} */}

			<ClearSign query={query} onClick={() => setQuery("")}>
				&#9587;
			</ClearSign>
		</Content>
	);
};

export default Search;
