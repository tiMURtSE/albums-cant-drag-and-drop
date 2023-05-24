import { Caption, Settings, SortAndSearch, Wrapper } from "./MyAlbums.styled";
import FlexBetween from "styles/components/FlexBetween.styled";
import { ChangeEvent, useEffect, useState } from "react";
import AlbumView from "./components/AlbumItem/AlbumItem";
import { useAppSelector } from "hooks";
import AlbumRow from "./components/AlbumItem/AlbumItem";
import AlbumItem from "./components/AlbumItem/AlbumItem";
import FilterByYear from "./components/FilterByYear/FilterByYear";

const MyAlbums = () => {
	const albums = useAppSelector((state) => state.albums.albums);
	const [modifiedAlbums, setModifiedAlbums] = useState(albums);
	const [search, setSearch] = useState("");
	const years = ["60's", "70's", "80's", "90's", "00's", "10's", "20's"];

	const searchAlbums = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
		setModifiedAlbums(
			albums.filter((album) => {
				const title = album.title.toLowerCase();
				const value = event.target.value.toLowerCase();

				return title.includes(value);
			})
		);
	};

	return (
		<Wrapper>
			<Settings>
				<FlexBetween>
					<SortAndSearch>
						<input
							style={{ border: "1px solid #000" }}
							value={search}
							onChange={searchAlbums}
						/>

						<select>
							<option>По году</option>
							<option>По названию</option>
						</select>
					</SortAndSearch>

					<FilterByYear
						modifiedAlbums={modifiedAlbums}
						setModifiedAlbums={setModifiedAlbums}
					/>
				</FlexBetween>
			</Settings>

			<Caption>
				<div>Обложка</div>
				<div>Что и кем</div>
				<div>Год</div>
				<div>Дата добавления</div>
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
