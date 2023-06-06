import { FormEvent, useState } from "react";
import Autocomplete from "../Autocomplete/Autocomplete";
import { ClearSign, Content, Input } from "./Searchbar.styled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks";
import { setIsAutocompleteOpen } from "store/autocompleteSlice";
import { useHandleOutsideClick } from "hooks/useHandleOutsideClick";

const Searchbar = () => {
	const [query, setQuery] = useState("");
	const isAutocompleteOpen = useAppSelector((state) => state.autocomplete.isAutocompleteOpen);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const insideClickSelectors = ["#input", "#autocomplete"];

	const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		navigate(`/search/${query}`);
		dispatch(setIsAutocompleteOpen({ isAutocompleteOpen: false }));
	};

	const closeAutocomplete = () => {
		dispatch(setIsAutocompleteOpen({ isAutocompleteOpen: false }));
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
					onChange={(event) => setQuery(event.target.value)}
				/>
			</form>
			<Autocomplete query={query} />

			<ClearSign query={query} onClick={() => setQuery("")}>
				&#9587;
			</ClearSign>
		</Content>
	);
};

export default Searchbar;
