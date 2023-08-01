import { useState } from "react";
import { setAlbums } from "store/reducers/albumsSlice";
import { albumsSelector } from "store/selectors/albumsSelector";
import { useAppDispatch, useAppSelector } from "hooks";
import { useAlbumListCustomization } from "hooks/useAlbumListCustomization";
import { useDragAndDrop } from "hooks/useDragAndDrop";
import AnimatedButton from "components/UI/AnimatedButton/AnimatedButton";
import { Decades, Sorting } from "types";
import * as Styled from "./Collection.styled";
import AlbumTable from "./components/AlbumTable/AlbumTable";
import FilterByDecade from "./components/FilterByDecade/FilterByDecade";

const Collection = () => {
	const albums = useAppSelector(albumsSelector);
	const [sorting, setSorting] = useState<Sorting>({ column: "", type: "" });
	const [searchQuery, setSearchQuery] = useState("");
	const [filterByDecades, setFilterByDecades] = useState<Decades>([]);
	const [isDragging, setIsDragging] = useState(false);

	const dispatch = useAppDispatch();

	const customizedAlbumList = useAlbumListCustomization(albums, {
		sorting,
		searchQuery,
		filterByDecades,
	});

	const { rearrangedAlbums, dragAndDropHandlers } = useDragAndDrop();

	const changeAlbumPositions = () => {
		if (isDragging) {
			setIsDragging(false);
			dispatch(setAlbums({ albums: rearrangedAlbums }));
		} else {
			setIsDragging(true);
			setSorting({ column: "", type: "" });
			setSearchQuery("");
			setFilterByDecades([]);
		}
	};

	return (
		<Styled.Wrapper>
			<Styled.Customizations>
				<Styled.SearchAndFilter>
					<Styled.Input
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
				</Styled.SearchAndFilter>

				<AnimatedButton onClick={changeAlbumPositions}>
					{isDragging ? "Готово" : "Поменять порядок альбомов"}
				</AnimatedButton>
			</Styled.Customizations>

			<AlbumTable
				albums={isDragging ? rearrangedAlbums : customizedAlbumList}
				dragAndDropHandlers={isDragging ? dragAndDropHandlers : null}
				sorting={sorting}
				setSorting={setSorting}
			/>
		</Styled.Wrapper>
	);
};

export default Collection;
