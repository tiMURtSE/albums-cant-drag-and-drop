import { useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { useAlbumListCustomization } from "hooks/useAlbumListCustomization";
import { Decades, Sort } from "types";
import {
	Input,
	Customizations,
	SearchAndFilter,
	Wrapper,
	ChangeOrderButton,
} from "./MyAlbums.styled";
import FilterByDecade from "./components/FilterByDecade/FilterByDecade";
import AlbumList from "./components/AlbumList/AlbumList";
import { setAlbums } from "store/albumsSlice";
import { useDragAndDrop } from "hooks/useDragAndDrop";

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
		}
	};

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

				<ChangeOrderButton onClick={changeAlbumPositions}>
					{isDragging ? "Готово" : "Поменять порядок альбомов"}
				</ChangeOrderButton>
			</Customizations>

			<AlbumList
				dragAndDropHandlers={isDragging ? dragAndDropHandlers : null}
				albums={isDragging ? rearrangedAlbums : customizedAlbumList}
				sort={sort}
				setSort={setSort}
			/>
		</Wrapper>
	);
};

export default MyAlbums;
