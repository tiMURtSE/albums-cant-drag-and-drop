import { MouseEvent, useEffect, useState } from "react";
import { Filter, Decade } from "./FilterByDecade.styled";
import { Decades } from "types";

type Props = {
	filterByDecades: ("50" | "60" | "70" | "80" | "90" | "00" | "10" | "20")[];
	setFilterByDecades: React.Dispatch<Decades>;
	isDragging: boolean;
};

type Decade = {
	decade: "50" | "60" | "70" | "80" | "90" | "00" | "10" | "20";
	isFlagged: boolean;
};

const FilterByDecade = ({ filterByDecades, setFilterByDecades, isDragging }: Props) => {
	const [decades, setDecades] = useState<Decade[]>([
		{ decade: "50", isFlagged: false },
		{ decade: "60", isFlagged: false },
		{ decade: "70", isFlagged: false },
		{ decade: "80", isFlagged: false },
		{ decade: "90", isFlagged: false },
		{ decade: "00", isFlagged: false },
		{ decade: "10", isFlagged: false },
		{ decade: "20", isFlagged: false },
	]);

	const flagDecade = (event: MouseEvent<HTMLDivElement>) => {
		if (isDragging) return;

		const flaggedDecade: any = event.currentTarget.getAttribute("data-decade");
		const updatedDecades = decades.map((item) =>
			item.decade === flaggedDecade ? { ...item, isFlagged: !item.isFlagged } : item
		);
		const updatedFlaggedDecades = filterByDecades.includes(flaggedDecade)
			? filterByDecades.filter((decade) => decade !== flaggedDecade)
			: [...filterByDecades, flaggedDecade];

		setDecades(updatedDecades);
		setFilterByDecades(updatedFlaggedDecades);
	};

	useEffect(() => {
		if (isDragging)
			setDecades([
				{ decade: "50", isFlagged: false },
				{ decade: "60", isFlagged: false },
				{ decade: "70", isFlagged: false },
				{ decade: "80", isFlagged: false },
				{ decade: "90", isFlagged: false },
				{ decade: "00", isFlagged: false },
				{ decade: "10", isFlagged: false },
				{ decade: "20", isFlagged: false },
			]);
	}, [isDragging]);

	return (
		<Filter>
			{decades.map(({ decade, isFlagged }) => (
				<Decade
					onClick={flagDecade}
					data-decade={decade}
					isFlagged={isFlagged}
					key={decade}
					isDragging={isDragging}
				>
					{decade}'s
				</Decade>
			))}
		</Filter>
	);
};

export default FilterByDecade;
