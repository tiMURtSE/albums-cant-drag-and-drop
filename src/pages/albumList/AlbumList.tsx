import { useState } from "react";

type Props = {};

const AlbumList = (props: Props) => {
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [showList, setShowList] = useState(false);
	const items = ["apple", "banana", "cherry", "date", "elderberry"];

	function handleKeyDown(event: any) {
		if (event.key === "ArrowUp") {
			setSelectedIndex(
				selectedIndex === 0 ? items.length - 1 : selectedIndex - 1
			);
		} else if (event.key === "ArrowDown") {
			setSelectedIndex(
				selectedIndex === items.length - 1 ? 0 : selectedIndex + 1
			);
		}
	}

	function handleMouseEnter(index: any) {
		setSelectedIndex(index);
	}

	function handleItemClick(item: any) {
		console.log(`Selected item: ${item}`);
		setShowList(false);
	}

	function handleInputBlur() {
		setShowList(false);
	}

	function handleInputChange(event: any) {
		const value = event.target.value;
		if (value) {
			setShowList(true);
		} else {
			setShowList(false);
		}
	}

	return (
		<div>
			<input
				type="text"
				onKeyDown={handleKeyDown}
				onBlur={handleInputBlur}
				onChange={handleInputChange}
				style={{ backgroundColor: "grey" }}
			/>
			{showList && (
				<ul>
					{items.map((item, index) => (
						<li
							key={index}
							className={
								selectedIndex === index ? "selected" : ""
							}
							onMouseEnter={() => handleMouseEnter(index)}
							onClick={() => handleItemClick(item)}
							style={
								selectedIndex === index
									? { backgroundColor: "red" }
									: {}
							}
						>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default AlbumList;
