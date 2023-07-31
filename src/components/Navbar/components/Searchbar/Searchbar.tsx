import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { closeAutocomplete } from "store/reducers/autocompleteSlice";
import { isAutocompleteOpenSelector } from "store/selectors/isAutocompleteOpenSelector";
import { useAppDispatch, useAppSelector } from "hooks";
import { useHandleOutsideClick } from "hooks/useHandleOutsideClick";
import { useSearchHotKey } from "hooks/useSearchHotKey";
import Autocomplete from "./Autocomplete/Autocomplete";
import HotkeyTooltip from "./HotkeyTooltip/HotkeyTooltip";
import * as Styled from "./Searchbar.styled";

const Searchbar = () => {
	const [query, setQuery] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	const [isInputFocused, setIsInputFocused] = useState(false);
	const isAutocompleteOpen = useAppSelector(isAutocompleteOpenSelector);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const innerSelectors = ["#input", "#autocomplete"];

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
			<form onSubmit={handleSubmit}>
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

			{query && <Styled.ClearSign onClick={() => setQuery("")}>&#9587;</Styled.ClearSign>}

			<HotkeyTooltip
				query={query}
				isInputFocused={isInputFocused}
			/>

			<Autocomplete query={query} />
		</Styled.Container>
	);
};

export default Searchbar;
