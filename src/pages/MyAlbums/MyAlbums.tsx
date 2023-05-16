import { Filter, List, Settings, SortAndSearch, Year } from "./MyAlbums.styled";
import Wrapper from "styles/components/Wrapper.styled";
import FlexBetween from "styles/components/FlexBetween.styled";
import { useSelector } from "react-redux";
import { Albums } from "types";
import { ChangeEvent, useState } from "react";
import CommonAlbumView from "components/CommonAlbumView/CommonAlbumView";
import AlbumView from "./components/AlbumView";

const MyAlbums = () => {
	const albums = useSelector(
		(state: { albums: { albums: Albums } }) => state.albums.albums
	);
	const [modifiedAlbums, setModifiedAlbums] = useState<Albums>(albums);
	const [search, setSearch] = useState<string>("");
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

					<Filter>
						{years.map((year) => (
							<Year key={year}>{year}</Year>
						))}
					</Filter>
				</FlexBetween>
			</Settings>

			<List>
				{modifiedAlbums.map((album) => (
					<AlbumView album={album} key={album.id} />
				))}
			</List>
		</Wrapper>
	);
};

export default MyAlbums;
