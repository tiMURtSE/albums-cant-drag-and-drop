import { useState } from "react";
import { useAppSelector } from "hooks";
import { useAlbumListModifiers } from "hooks/useAlbumListModifiers";
import { IModifiers } from "types";
import { Input, Modifiers, SortAndSearch, Wrapper } from "./MyAlbums.styled";
import FilterByDecade from "./components/FilterByDecade/FilterByDecade";
import AlbumList from "./components/AlbumList/AlbumList";

const MyAlbums = () => {
	const albums = useAppSelector((state) => state.albums.albums);
	const [modifiers, setModifiers] = useState<IModifiers>({
		sort: { column: "", type: "" },
		query: "",
		flaggedDecades: [],
	});
	const modifiedAlbums = useAlbumListModifiers(albums, modifiers);

	return (
		<Wrapper>
			<Modifiers>
				<SortAndSearch>
					<Input
						type="text"
						value={modifiers.query}
						onChange={(event) =>
							setModifiers({ ...modifiers, query: event.target.value })
						}
						placeholder="Поиск..."
					/>

					<FilterByDecade modifiers={modifiers} setModifiers={setModifiers} />
				</SortAndSearch>
			</Modifiers>

			<AlbumList
				modifiedAlbums={modifiedAlbums}
				modifiers={modifiers}
				setModifiers={setModifiers}
			/>
		</Wrapper>
	);
};

export default MyAlbums;
