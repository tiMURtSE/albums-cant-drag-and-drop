import React, { useState } from "react";

interface Props {}

const SearchBar: React.FC<Props> = () => {
	const [searchValue, setSearchValue] = useState("");
	const [showSuggestions, setShowSuggestions] = useState(false);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
		setShowSuggestions(true);
	};

	const handleSuggestionClick = (suggestion: string) => {
		setSearchValue(suggestion);
		setShowSuggestions(false);
	};

	const handleOutsideClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		if (
			!target.closest(".suggestions") &&
			!target.closest(".search-input")
		) {
			setShowSuggestions(false);
		}
	};

	React.useEffect(() => {
		document.addEventListener("click", handleOutsideClick);
		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	const suggestions = ["apple", "banana", "orange", "pear"];

	return (
		<div className="search-bar">
			<input
				type="text"
				className="search-input"
				placeholder="Search..."
				value={searchValue}
				onChange={handleInputChange}
			/>
			{showSuggestions && (
				<ul className="suggestions">
					{suggestions
						.filter((suggestion) =>
							suggestion
								.toLowerCase()
								.includes(searchValue.toLowerCase())
						)
						.map((suggestion) => (
							<li
								key={suggestion}
								onClick={() =>
									handleSuggestionClick(suggestion)
								}
							>
								{suggestion}
							</li>
						))}
				</ul>
			)}
		</div>
	);
};

export default SearchBar;
