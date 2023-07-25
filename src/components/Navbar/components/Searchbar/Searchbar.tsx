import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { closeAutocomplete } from "store/autocompleteSlice";
import { useAppDispatch, useAppSelector } from "hooks";
import { useHandleOutsideClick } from "hooks/useHandleOutsideClick";
import { useMediaQuery } from "hooks/useMediaQuery";
import { useSearchHotKey } from "hooks/useSearchHotKey";
import { theme } from "theme/theme";
import Autocomplete from "../Autocomplete/Autocomplete";
import * as Styled from "./Searchbar.styled";

const Searchbar = () => {
	const [query, setQuery] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	const [isInputFocused, setIsInputFocused] = useState(false);
	const isAutocompleteOpen = useAppSelector((state) => state.autocomplete.isAutocompleteOpen);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const extraLargeScreenSize = theme.media.extraLarge;
	const isBelowExtraLargeScreenSize = useMediaQuery(extraLargeScreenSize);
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
	useSearchHotKey(inputRef);

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
					onFocus={() => setIsInputFocused(true)}
					onBlur={() => setIsInputFocused(false)}
				/>
			</form>

			<Autocomplete query={query} />

			{query && <Styled.ClearSign onClick={() => setQuery("")}>&#9587;</Styled.ClearSign>}

			{!isBelowExtraLargeScreenSize && !isInputFocused && (
				<Styled.KbdWrapper>
					<kbd>
						<kbd>Ctrl K</kbd>
					</kbd>
				</Styled.KbdWrapper>
			)}
		</Styled.Container>
	);
};

export default Searchbar;
