import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearFoundAlbums, setFoundAlbums } from "store/albumsSlice";
import formatAlbum from "utils/formatAlbum";
import searchAlbums from "services/api/search.api";
import { Albums } from "types";
import {
	Autocomplete,
	ClearSign,
	Content,
	Input,
	Item,
	ItemLink,
	List,
} from "./Searchbar.styled";

const Search = () => {
	const [query, setQuery] = useState("");
	const foundAlbums: Albums = useSelector(
		(state: any) => state.albums.foundAlbums
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = async (event: any) => {
		event.preventDefault();
		dispatch(clearFoundAlbums());

		const results = await searchAlbums(query);
		const albums = results.albums.items;

		for (let i = 0; i < albums.length; i++) {
			albums[i] = formatAlbum(albums[i]);
		}

		dispatch(setFoundAlbums({ albums }));
		navigate(`/search/${query}`);
	};

	return (
		<Content>
			<form onSubmit={onSubmit}>
				<Input
					type="search"
					placeholder="Поиск..."
					value={query}
					onChange={(event) => {
						setQuery(event.target.value);
						// if (event.target.value) searchAlbum(event.target.value);
					}}
				/>
			</form>

			{/* {query && (
				<Autocomplete>
					<List>
						{foundAlbums.filter(album =>
							album.title
								.toLowerCase()
								.includes(query.toLowerCase())
						).length ? (
							foundAlbums
								.filter(album =>
									album.title
										.toLowerCase()
										.includes(query.toLowerCase())
								)
								.map(album => (
									<Item key={album.title}>
										<ItemLink href="#">
											{album.title}
										</ItemLink>
									</Item>
								))
						) : (
							<span>Нет результатов</span>
						)}
					</List>
				</Autocomplete>
			)} */}

			<ClearSign query={query} onClick={() => setQuery("")}>
				&#9587;
			</ClearSign>
		</Content>
	);
};

export default Search;
