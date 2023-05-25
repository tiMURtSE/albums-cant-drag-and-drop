import { SyntheticEvent, useEffect, useState } from "react";
import { Filter, Year } from "./FilterByYear.styled";
import { IAlbum } from "types";
import { useAppSelector } from "hooks";

type Props = {
	modifiers: {
		sort: { column: keyof IAlbum | ""; type: string };
		query: string;
		flaggedYears: string[];
	};
	setModifiers: React.Dispatch<
		React.SetStateAction<{
			sort: { column: keyof IAlbum | ""; type: string };
			query: string;
			flaggedYears: string[];
		}>
	>;
};

const FilterByYear = ({ modifiers, setModifiers }: Props) => {
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
			const updatedFlaggedYears = [...modifiers.flaggedYears].filter(
				(year) => year !== flaggedYear
			);

			setModifiers({ ...modifiers, flaggedYears: updatedFlaggedYears });
		} else {
			const updatedFlaggedYears = [...modifiers.flaggedYears];

			updatedFlaggedYears.push(flaggedYear);
			setModifiers({ ...modifiers, flaggedYears: updatedFlaggedYears });
		}
	};

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
