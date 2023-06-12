import { useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { useAlbumListCustomization } from "hooks/useAlbumListCustomization";
import { Decades, IAlbum, Sort } from "types";
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
import { sortRearrangedAlbums } from "utils/sortRearrangedAlbums";

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

	const [rearrangedAlbums, setRearrangedAlbums] = useState(customizedAlbumList);

	const changeAlbumPositions = () => {
		if (isDragging) {
			const albums = [...rearrangedAlbums].sort(sortRearrangedAlbums);

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
				rearrangedAlbums={rearrangedAlbums}
				setRearrangedAlbums={setRearrangedAlbums}
				customizedAlbumList={customizedAlbumList}
				sort={sort}
				setSort={setSort}
				isDragging={isDragging}
			/>
		</Wrapper>
	);
};

export default MyAlbums;
