import { Caption, Settings, SortAndSearch, Wrapper } from "./MyAlbums.styled";
import FlexBetween from "styles/components/FlexBetween.styled";
import { ChangeEvent, useEffect, useState } from "react";
import AlbumView from "./components/AlbumItem/AlbumItem";
import { useAppSelector } from "hooks";
import AlbumRow from "./components/AlbumItem/AlbumItem";
import AlbumItem from "./components/AlbumItem/AlbumItem";
import FilterByYear from "./components/FilterByYear/FilterByYear";
import { useAlbumListModifier } from "hooks/useAlbumListModifier";
import { IAlbum } from "types";

type Modifiers = {
	sort: { column: keyof IAlbum | ""; type: string };
	query: string;
	flaggedYears: string[];
};

const MyAlbums = () => {
	const albums = useAppSelector((state) => state.albums.albums);
	const [modifiers, setModifiers] = useState<Modifiers>({
		sort: { column: "", type: "" },
		query: "",
		flaggedYears: [],
	});
	const modifiedAlbums = useAlbumListModifier(albums, modifiers);

	const handleSortClick = (column: keyof IAlbum) => {
		const isPreviousColumnSorting = modifiers.sort.column === column;

		if (isPreviousColumnSorting) {
			if (modifiers.sort.type === "asc") {
				setModifiers({ ...modifiers, sort: { column, type: "desc" } });
			} else if (modifiers.sort.type === "desc") {
				setModifiers({ ...modifiers, sort: { column: "", type: "" } });
			}
		} else {
			setModifiers({ ...modifiers, sort: { column, type: "asc" } });
		}
	};

	return (
		<Wrapper>
			<Settings>
				<FlexBetween>
					<SortAndSearch>
						<input
							style={{ border: "1px solid #000" }}
							value={modifiers.query}
							onChange={(event) =>
								setModifiers({ ...modifiers, query: event.target.value })
							}
						/>

						<select>
							<option>По году</option>
							<option>По названию</option>
						</select>
					</SortAndSearch>

					<FilterByYear modifiers={modifiers} setModifiers={setModifiers} />
				</FlexBetween>
			</Settings>

			<Caption>
				<div>Обложка</div>
				<div onClick={() => handleSortClick("title")}>Что и кем</div>
				<div onClick={() => handleSortClick("year")}>Год</div>
				<div onClick={() => handleSortClick("createdAt")}>Дата добавления</div>
			</Caption>

			<div>
				{modifiedAlbums.map((album) => (
					<AlbumItem album={album} key={album.id} />
				))}
			</div>
		</Wrapper>
	);
};

export default MyAlbums;
