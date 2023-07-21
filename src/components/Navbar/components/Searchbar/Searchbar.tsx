import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { closeAutocomplete } from "store/autocompleteSlice";
import { useAppDispatch, useAppSelector } from "hooks";
import { useHandleOutsideClick } from "hooks/useHandleOutsideClick";
import Autocomplete from "../Autocomplete/Autocomplete";
import * as Styled from "./Searchbar.styled";

const Searchbar = () => {
	const [query, setQuery] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	const isAutocompleteOpen = useAppSelector((state) => state.autocomplete.isAutocompleteOpen);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const innerSelectors = ["#input", "#autocomplete"];

	const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (query) {
			navigate(`/search/${query}`);
			dispatch(closeAutocomplete());
			inputRef.current?.blur();
		}
	};

	useHandleOutsideClick(isAutocompleteOpen, innerSelectors, () => dispatch(closeAutocomplete()));

	return (
		<Styled.Container>
			<form onSubmit={handleSearchSubmit}>
				<Styled.Input
					id="input"
					type="text"
					placeholder="Поиск..."
					autoComplete="off"
					ref={inputRef}
					value={query}
					onChange={(event) => setQuery(event.target.value)}
				/>
			</form>

			<Autocomplete query={query} />

			{query && <Styled.ClearSign onClick={() => setQuery("")}>&#9587;</Styled.ClearSign>}
		</Styled.Container>
	);
};

export default Searchbar;
