import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClearSign, Content, Input } from "./Searchbar.styled";
import { useHandleOutsideClick } from "hooks/useHandleOutsideClick";
import Autocomplete from "../Autocomplete/Autocomplete";
import { useAppDispatch, useAppSelector } from "hooks";
import { setIsAutocompleteOpen } from "store/autocompleteSlice";

const Searchbar = () => {
	const [query, setQuery] = useState("");
	const isAutocompleteOpen = useAppSelector((state) => state.autocomplete.isAutocompleteOpen);
	const insideClickSelectors = ["#input", "#autocomplete"];
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleSearchSubmit = async (event?: FormEvent<HTMLFormElement>) => {
		if (event) event.preventDefault();

		navigate(`/search/${query}`);
		dispatch(setIsAutocompleteOpen({ isAutocompleteOpen: false }));

		const input = document.querySelector(insideClickSelectors[0]) as HTMLElement;

		if (input) input.blur();
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
					onChange={(event) => {
						setQuery(event.target.value);
					}}
				/>

				<Autocomplete query={query} handleSearchSubmit={handleSearchSubmit} />
			</form>

			{/* {isAutocompleteOpen && ( */}

			{/* )} */}

			<ClearSign query={query} onClick={() => setQuery("")}>
				&#9587;
			</ClearSign>
		</Content>
	);
};

export default Searchbar;
