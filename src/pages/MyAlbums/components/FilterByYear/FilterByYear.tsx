import { SyntheticEvent, useEffect, useState } from "react";
import { Filter, Year } from "./FilterByYear.styled";
import { IAlbum } from "types";
import { useAppSelector } from "hooks";

type Props = {
	modifiers: {
		sort: keyof IAlbum | "";
		query: string;
		flaggedYears: string;
	};
	setModifiers: React.Dispatch<
		React.SetStateAction<{
			sort: keyof IAlbum | "";
			query: string;
			flaggedYears: string;
		}>
	>;
};

const FilterByYear = ({ modifiers, setModifiers }: Props) => {
	const albums = useAppSelector((state) => state.albums.albums);
	const [years, setYears] = useState([
		{ year: "50", isFlagged: false },
		{ year: "60", isFlagged: false },
		{ year: "70", isFlagged: false },
		{ year: "80", isFlagged: false },
		{ year: "90", isFlagged: false },
		{ year: "00", isFlagged: false },
		{ year: "10", isFlagged: false },
		{ year: "20", isFlagged: false },
	]);

	const flagYear = (event: any) => {
		const flaggedYear = event.target.textContent.slice(0, 2);
		const updatedYears = years.map((item) => {
			if (item.year === flaggedYear) {
				return { ...item, isFlagged: !item.isFlagged };
			}

			return item;
		});
		setYears(updatedYears);

		if (modifiers.flaggedYears.includes(flaggedYear)) {
			const updatedFlaggedYears = modifiers.flaggedYears.replaceAll(flaggedYear, "");

			setModifiers({ ...modifiers, flaggedYears: updatedFlaggedYears });
		} else {
			const updatedFlaggedYears = modifiers.flaggedYears + flaggedYear;

			setModifiers({ ...modifiers, flaggedYears: updatedFlaggedYears });
		}

		// if (modifiers.flaggedYears.includes(flaggedYear)) {
		// 	const updatedFlaggedYears = modifiers.flaggedYears.filter(
		// 		(year) => year !== flaggedYear
		// 	);

		// 	setModifiers({ ...modifiers, flaggedYears: updatedFlaggedYears });
		// } else {
		// 	const updatedFlaggedYears = modifiers.flaggedYears;

		// 	updatedFlaggedYears.push(flaggedYear);
		// 	setModifiers({ ...modifiers, flaggedYears: updatedFlaggedYears });
		// }
	};

	// const flagYear = (event: any) => {
	// 	const target = event.target;

	// 	const updatedYears = years.map((item) => {
	// 		if (item.year === target.textContent.slice(0, 2)) {
	// 			return { ...item, isFlagged: !item.isFlagged };
	// 		}

	// 		return item;
	// 	});

	// 	const filteredAlbums = albums.filter((album) => {
	// 		const albumYear = String(album.year).slice(2, 3);
	// 		let flaggedYears = [];

	// 		for (let index = 0; index < updatedYears.length; index++) {
	// 			if (updatedYears[index].isFlagged)
	// 				flaggedYears.push(updatedYears[index].year.slice(0, 1));
	// 		}

	// 		return flaggedYears.includes(albumYear);
	// 	});

	// 	if (!updatedYears.find((year) => year.isFlagged)) {
	// 		setModifiedAlbums(albums);
	// 	} else {
	// 		setModifiedAlbums(filteredAlbums);
	// 	}

	// 	setYears(updatedYears);
	// };

	return (
		<Filter>
			{years.map(({ year, isFlagged }) => (
				<Year onClick={flagYear} isFlagged={isFlagged} key={year}>
					{year}'s
				</Year>
			))}
		</Filter>
	);
};

export default FilterByYear;
