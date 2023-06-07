import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks";
import { useHandleOutsideClick } from "hooks/useHandleOutsideClick";
import Autocomplete from "../Autocomplete/Autocomplete";
import { ClearSign, Content, Input } from "./Searchbar.styled";
import { closeAutocomplete } from "store/autocompleteSlice";

const Searchbar = () => {
	const [query, setQuery] = useState("");
	const isAutocompleteOpen = useAppSelector((state) => state.autocomplete.isAutocompleteOpen);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const innerSelectors = ["#input", "#autocomplete"];

	const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		navigate(`/search/${query}`);
		dispatch(closeAutocomplete());

		const input = document.querySelector("#input") as HTMLElement;

		if (input) input.blur();
	};

	useHandleOutsideClick(isAutocompleteOpen, innerSelectors, () => dispatch(closeAutocomplete()));

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
