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

const MyAlbums = () => {
	const albums = useAppSelector((state) => state.albums.albums);
	const [isDragging, setIsDragging] = useState(false);
	const [sort, setSort] = useState<Sort>({ sortingColumn: "", typeOfSort: "" });
	const [searchQuery, setSearchQuery] = useState("");
	const [filterByDecades, setFilterByDecades] = useState<Decades>([]);

	const dispatch = useAppDispatch();
	const customizedAlbumList = useAlbumListCustomization(albums, {
		sort,
		searchQuery,
		filterByDecades,
	});

	const [draggedAlbums, setDraggedAlbums] = useState(customizedAlbumList);

	const changeAlbumPositions = () => {
		if (isDragging) {
			const albums = [...draggedAlbums].sort((a, b) => a.position - b.position);

			dispatch(setAlbums({ albums }));
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
				draggedAlbums={draggedAlbums}
				setDraggedAlbums={setDraggedAlbums}
				customizedAlbumList={customizedAlbumList}
				sort={sort}
				setSort={setSort}
				isDragging={isDragging}
			/>
		</Wrapper>
	);
};

export default MyAlbums;
