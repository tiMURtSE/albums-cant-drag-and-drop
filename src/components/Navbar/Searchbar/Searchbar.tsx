import { FormEventHandler, useState } from "react";
import {
	Autocomplete,
	ClearSign,
	Content,
	Input,
	Item,
	ItemLink,
	List,
} from "./Searchbar.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setSearch } from "store/searchSlice";
import search from "services/api/search.api";
import formatAlbum from "utils/formatAlbum";
import { setSearchAlbums } from "store/albumsSlice";

type Search = (album: string, limit?: string, page?: string) => void;
type Albums = Array<{ title: string; artist: string; image: string }>;

const Search = () => {
	const [query, setQuery] = useState("");
	const [albums, setAlbums] = useState<Albums>([]);
	const dispatch = useDispatch();
	const navigate = useNavigate();

    const searchAlbums = async (event: any) => {
        event.preventDefault();
		const searchResults = await search(query);
		const albums = searchResults.albums.items;

		for (let i = 0; i < albums.length; i++) {
			albums[i] = formatAlbum(albums[i]);
		}
        
		dispatch(setSearchAlbums({ albums }));
        navigate(`/search/${query}`)
	};

	return (
		<Content>
			<form onSubmit={searchAlbums}>
				<Input
					type="query"
					value={query}
					placeholder="Поиск..."
					onChange={event => {
						setQuery(event.target.value);
						// if (event.target.value) searchAlbum(event.target.value);
					}}
				/>
			</form>

			{query && (
				<Autocomplete>
					<List>
						{albums.filter(album =>
							album.title
								.toLowerCase()
								.includes(query.toLowerCase())
						).length ? (
							albums
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
			)}

			<ClearSign query={query} onClick={() => setQuery("")}>
				&#9587;
			</ClearSign>
		</Content>
	);
};

export default Search;
