import { Loader } from "styles/components/Loader.styled";
import { Item, ItemLink, List, Wrapper } from "./Autocomplete.styled";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { IAlbum } from "types";
import searchAlbums from "services/api/searchAlbums.api";
import formatAlbum from "utils/formatAlbum";
import { useAppDispatch } from "hooks";
import { clearFoundAlbums, setFoundAlbums } from "store/albumsSlice";
import { useAutocompleteNavigation } from "hooks/useAutocompleteNavigation";

type Props = {
	query: string;
	isAutocompleteOpen: boolean;
	setIsAutocompleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Autocomplete = ({ query, isAutocompleteOpen, setIsAutocompleteOpen }: Props) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [suggestions, selectedIndex, setSuggestions] = useAutocompleteNavigation(
		query,
		isAutocompleteOpen
	);
	console.log(selectedIndex);
	const fetchAndFormatAlbums = async (): Promise<Array<IAlbum>> => {
		const response = await searchAlbums(query);
		const albums = response.albums.items;

		for (let i = 0; i < albums.length; i++) {
			albums[i] = formatAlbum(albums[i]);
		}

		return albums;
	};

	const onSubmit = async (event?: FormEvent<HTMLFormElement>) => {
		if (event) event.preventDefault();
		dispatch(clearFoundAlbums());

		const albums = await fetchAndFormatAlbums();

		dispatch(setFoundAlbums({ albums }));
		navigate(`/search/${query}`);
		setIsAutocompleteOpen(false);
	};

	useEffect(() => {
		if (!query) {
			return setIsAutocompleteOpen(false);
		}

		setIsLoading(true);

		const timer = setTimeout(async () => {
			if (query) {
				const albums = await fetchAndFormatAlbums();

				setSuggestions(albums);
				setIsLoading(false);
			}
		}, 500);

		return () => {
			clearTimeout(timer);
			setIsLoading(false);
		};
	}, [query]);

	const action = (event: any) => {
		console.log(event.key);
		if (selectedIndex === -1) return;

		if (event.key === "Enter") {
			const albumId = suggestions[selectedIndex].id;

			navigate(`/album/${albumId}`);
			setIsAutocompleteOpen(false);
			// setSelectedIndex(0);
		} else {
			onSubmit();
		}
	};

	useEffect(() => {
		if (isAutocompleteOpen) {
			console.log("add");
			document.addEventListener("keydown", action);
		}

		return () => {
			console.log("remove");
			document.removeEventListener("keydown", action);
		};
	}, [selectedIndex, isAutocompleteOpen]);

	return (
		<Wrapper id="autocomplete">
			{isLoading ? (
				<Loader
					width="100%"
					height="100px"
					contentWidth="25px"
					contentHeight="25px"
					border="3px"
				/>
			) : (
				<List id="search-list">
					{suggestions.map((album, index) => (
						<Item key={album.id} onClick={() => setIsAutocompleteOpen(false)}>
							<Link to={`/album/${album.id}`}>
								<ItemLink isFocused={selectedIndex === index}>
									{album.title}
								</ItemLink>
							</Link>
						</Item>
					))}
				</List>
			)}
		</Wrapper>
	);
};

export default Autocomplete;
