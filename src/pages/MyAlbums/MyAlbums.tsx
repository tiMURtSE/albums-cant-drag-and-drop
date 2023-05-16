import Container from "styles/components/Container.styled";
import Paddings from "styles/components/Paddings.styled";
import { Content, Filter, SortAndSearch, Year } from "./MyAlbums.styled";
import Wrapper from "styles/components/Wrapper.styled";
import FlexBetween from "styles/components/FlexBetween.styled";
import { useSelector } from "react-redux";
import { Albums } from "types";
import { useState } from "react";

const MyAlbums = () => {
	const [albums, setAlbums] = useState(
		useSelector(
			(state: { albums: { albums: Albums } }) => state.albums.albums
		)
	);
	const years = ["60's", "70's", "80's", "90's", "00's", "10's", "20's"];
	const [filter, setFilter] = useState<string[]>([]);

	const filterByYear = (event: any) => {
		const year = event.target.textContent;

		if (filter.includes(year)) {
			setFilter(filter.filter((item) => item !== year));
			setAlbums(
				albums.filter(
					(albums) => String(albums.year).at(-2) === year[0]
				)
			);
		} else {
			setFilter([...filter, year]);
		}
	};

	return (
		<Wrapper>
			<FlexBetween>
				<Filter>
					{years.map((year) => (
						<Year
							onClick={filterByYear}
							isPressed={filter.includes(year)}
							key={year}
						>
							{year}
						</Year>
					))}
				</Filter>

				<SortAndSearch></SortAndSearch>
			</FlexBetween>

			{albums.map((album) => (
				<div key={album.id}>
					{album.title} by {album.artist}
				</div>
			))}
		</Wrapper>
	);
};

export default MyAlbums;
