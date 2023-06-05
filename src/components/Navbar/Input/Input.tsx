import { useAppDispatch } from "hooks";
import { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { clearFoundAlbums, setFoundAlbums } from "store/albumsSlice";

type Props = {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
	setIsAutocompleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Input = ({ query, setQuery, setIsAutocompleteOpen }: Props) => {
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

	return (
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
	);
};

export default Input;
