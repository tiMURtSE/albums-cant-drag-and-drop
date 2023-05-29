import { useState } from "react";
import { useAppSelector } from "hooks";
import { useAlbumListCustomization } from "hooks/useAlbumListCustomization";
import { Decades, Sort } from "types";
import { Input, Modifiers, SortAndSearch, Wrapper } from "./MyAlbums.styled";
import FilterByDecade from "./components/FilterByDecade/FilterByDecade";
import AlbumList from "./components/AlbumList/AlbumList";

const MyAlbums = () => {
	const albums = useAppSelector((state) => state.albums.albums);
	// const [settings, setSettings] = useState<IModifiers>({
	// 	sort: { column: "", type: "" },
	// 	query: "",
	// 	flaggedDecades: [],
	// });
	const [sort, setSort] = useState<Sort>({ sortingColumn: "", typeOfSort: "" });
	const [searchQuery, setSearchQuery] = useState("");
	const [filterByDecades, setFilterByDecades] = useState<Decades>([]);

	const customizedAlbumList = useAlbumListCustomization(albums, {
		sort,
		searchQuery,
		filterByDecades,
	});

	return (
		<Wrapper>
			<Modifiers>
				<SortAndSearch>
					<Input
						type="text"
						value={searchQuery}
						onChange={(event) => setSearchQuery(event.target.value)}
						placeholder="Поиск..."
					/>

					<FilterByDecade
						filterByDecades={filterByDecades}
						setFilterByDecades={setFilterByDecades}
					/>
				</SortAndSearch>
			</Modifiers>

			<AlbumList customizedAlbumList={customizedAlbumList} sort={sort} setSort={setSort} />
		</Wrapper>
	);
};

export default MyAlbums;
