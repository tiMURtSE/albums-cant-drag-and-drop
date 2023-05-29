import { useState } from "react";
import { Filter, Decade } from "./FilterByDecade.styled";
import { Decades, IModifiers } from "types";

type Props = {
	filterByDecades: Decades;
	setFilterByDecades: React.Dispatch<Decades>;
};

const FilterByDecade = ({ filterByDecades, setFilterByDecades }: Props) => {
	const [decades, setDecades] = useState([
		{ decade: "50", isFlagged: false },
		{ decade: "60", isFlagged: false },
		{ decade: "70", isFlagged: false },
		{ decade: "80", isFlagged: false },
		{ decade: "90", isFlagged: false },
		{ decade: "00", isFlagged: false },
		{ decade: "10", isFlagged: false },
		{ decade: "20", isFlagged: false },
	]);

	const flagDecade = (event: any) => {
		const flaggedDecade = event.target.textContent.slice(0, 2);
		const updatedDecades = decades.map((item) => {
			if (item.decade === flaggedDecade) {
				return { ...item, isFlagged: !item.isFlagged };
			}

			return item;
		});

		setDecades(updatedDecades);

		if (filterByDecades.includes(flaggedDecade)) {
			const updatedFlaggedDecades = [...filterByDecades].filter(
				(decade) => decade !== flaggedDecade
			);

			setFilterByDecades(updatedFlaggedDecades);
		} else {
			const updatedFlaggedDecades = [...filterByDecades];

			updatedFlaggedDecades.push(flaggedDecade);
			setFilterByDecades(updatedFlaggedDecades);
		}
	};

	return (
		<Filter>
			{decades.map(({ decade, isFlagged }) => (
				<Decade onClick={flagDecade} isFlagged={isFlagged} key={decade}>
					{decade}'s
				</Decade>
			))}
		</Filter>
	);
};

export default FilterByDecade;
