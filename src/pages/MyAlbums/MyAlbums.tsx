import { useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { useAlbumListCustomization } from "hooks/useAlbumListCustomization";
import { Decades, Sort } from "types";
import { Input, Customizations, SearchAndFilter, AlbumCollectionWrapper } from "./MyAlbums.styled";
import FilterByDecade from "./components/FilterByDecade/FilterByDecade";
import AlbumList from "./components/AlbumList/AlbumList";
import { setAlbums } from "store/albumsSlice";
import { useDragAndDrop } from "hooks/useDragAndDrop";
import Button from "components/UI/Button/Button";

const MyAlbums = () => {
	const albums = useAppSelector((state) => state.albums.albums);
	const [sort, setSort] = useState<Sort>({ sortingColumn: "", typeOfSort: "" });
	const [searchQuery, setSearchQuery] = useState("");
	const [filterByDecades, setFilterByDecades] = useState<Decades>([]);
	const [isDragging, setIsDragging] = useState(false);
	const dispatch = useAppDispatch();

	const customizedAlbumList = useAlbumListCustomization(albums, {
		sort,
		searchQuery,
		filterByDecades,
	});

	const { rearrangedAlbums, dragAndDropHandlers } = useDragAndDrop();

	const changeAlbumPositions = () => {
		if (isDragging) {
			dispatch(setAlbums({ albums: rearrangedAlbums }));
			setIsDragging(false);
		} else {
			setIsDragging(true);

			setSort({ sortingColumn: "", typeOfSort: "" });
			setSearchQuery("");
			setFilterByDecades([]);
		}
	};

	return (
		<AlbumCollectionWrapper>
			<Customizations>
				<SearchAndFilter>
					<Input
						type="text"
						value={searchQuery}
						onChange={(event) => setSearchQuery(event.target.value)}
						placeholder="Поиск..."
						disabled={isDragging}
					/>

					<FilterByDecade
						filterByDecades={filterByDecades}
						setFilterByDecades={setFilterByDecades}
						isDragging={isDragging}
					/>
				</SearchAndFilter>

				<Button onClick={changeAlbumPositions}>
					{isDragging ? "Готово" : "Поменять порядок альбомов"}
				</Button>
			</Customizations>

			<AlbumList
				dragAndDropHandlers={isDragging ? dragAndDropHandlers : null}
				albums={isDragging ? rearrangedAlbums : customizedAlbumList}
				sort={sort}
				setSort={setSort}
			/>
		</AlbumCollectionWrapper>
	);
};

export default MyAlbums;
