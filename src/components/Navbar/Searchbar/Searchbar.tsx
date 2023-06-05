import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearFoundAlbums, setFoundAlbums } from "store/albumsSlice";
import { IAlbum } from "types";
import searchAlbums from "services/api/searchAlbums.api";
import { Loader } from "styles/components/Loader.styled";
import { ClearSign, Content, Input } from "./Searchbar.styled";
import { useHandleOutsideClick } from "hooks/useHandleOutsideClick";
import formatAlbum from "utils/formatAlbum";
import { useAutocompleteNavigation } from "hooks/useAutocompleteNavigation";
import Autocomplete from "../Autocomplete/Autocomplete";
import { useAppDispatch } from "hooks";

const Search = () => {
	const [query, setQuery] = useState("");
	const [isAutocompleteOpen, setIsAutocompleteOpen] = useState<boolean>(false);

	const insideClickSelectors = ["#input", "#autocomplete"];

	const closeAutocomplete = () => {
		setIsAutocompleteOpen(false);
	};
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
		setIsAutocompleteOpen(true);
	};

	const onSubmit = async (event?: FormEvent<HTMLFormElement>) => {
		if (event) event.preventDefault();
		dispatch(clearFoundAlbums());

		const albums = await fetchAndFormatAlbums();

		dispatch(setFoundAlbums({ albums }));
		navigate(`/search/${query}`);
		setIsAutocompleteOpen(false);
	};

	const fetchAndFormatAlbums = async (): Promise<Array<IAlbum>> => {
		const response = await searchAlbums(query);
		const albums = response.albums.items;

		for (let i = 0; i < albums.length; i++) {
			albums[i] = formatAlbum(albums[i]);
		}

		return albums;
	};

	useHandleOutsideClick(isAutocompleteOpen, insideClickSelectors, closeAutocomplete);

	return (
		<Content>
			<form onSubmit={onSubmit}>
				<Input
					id="input"
					type="text"
					placeholder="Поиск..."
					autoComplete="off"
					value={query}
					onChange={onChange}
				/>
			</form>

			{isAutocompleteOpen && (
				<Autocomplete
					query={query}
					isAutocompleteOpen={isAutocompleteOpen}
					setIsAutocompleteOpen={setIsAutocompleteOpen}
				/>
			)}

			<ClearSign query={query} onClick={() => setQuery("")}>
				&#9587;
			</ClearSign>
		</Content>
	);
};

export default Search;
