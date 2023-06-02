import { useState } from "react";
import { useAppSelector } from "hooks";
import { useAlbumListCustomization } from "hooks/useAlbumListCustomization";
import { Decades, Sort } from "types";
import { Input, Customizations, SearchAndFilter, Wrapper } from "./MyAlbums.styled";
import FilterByDecade from "./components/FilterByDecade/FilterByDecade";
import AlbumList from "./components/AlbumList/AlbumList";

const MyAlbums = () => {
	const albums = useAppSelector((state) => state.albums.albums);
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
			<Customizations>
				<SearchAndFilter>
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
				</SearchAndFilter>
			</Customizations>

			<AlbumList customizedAlbumList={customizedAlbumList} sort={sort} setSort={setSort} />
		</Wrapper>
	);
};

export default MyAlbums;
