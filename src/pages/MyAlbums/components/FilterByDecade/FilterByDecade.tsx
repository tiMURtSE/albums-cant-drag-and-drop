import { useState } from "react";
import { Filter, Decade } from "./FilterByDecade.styled";
import { IModifiers } from "types";

type Props = {
	modifiers: IModifiers;
	setModifiers: React.Dispatch<IModifiers>;
};

const FilterByDecade = ({ modifiers, setModifiers }: Props) => {
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

		if (modifiers.flaggedDecades.includes(flaggedDecade)) {
			const updatedFlaggedDecades = [...modifiers.flaggedDecades].filter(
				(decade) => decade !== flaggedDecade
			);

			setModifiers({ ...modifiers, flaggedDecades: updatedFlaggedDecades });
		} else {
			const updatedFlaggedDecades = [...modifiers.flaggedDecades];

			updatedFlaggedDecades.push(flaggedDecade);
			setModifiers({ ...modifiers, flaggedDecades: updatedFlaggedDecades });
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
