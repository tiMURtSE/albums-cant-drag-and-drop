export const useSearchbar = () => {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState<Array<IAlbum>>([]);
	const [isAutocompleteOpen, setIsAutocompleteOpen] = useState<boolean>(false);
	const [selectedIndex, setSelectedIndex] = useState<number>(-1);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
		setIsAutocompleteOpen(true);
	};

	const onSubmit = async (event?: FormEvent<HTMLFormElement>) => {
		if (event) event.preventDefault();
		dispatch(clearFoundAlbums());

		const albums = await getAlbums();

		dispatch(setFoundAlbums({ albums }));
		navigate(`/search/${query}`);
		setIsAutocompleteOpen(false);
	};

	const handleOutsideClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;

		if (!target.closest("#input") && !target.closest("#autocomplete")) {
			setIsAutocompleteOpen(false);
		}
	};

	const handleNavigation = (event: KeyboardEvent) => {
		if (event.key.includes("Arrow") || event.key.includes("Enter") || event.key.includes("Tab"))
			event.preventDefault();

		if (event.key === "ArrowUp" || (event.key === "Tab" && event.shiftKey)) {
			setSelectedIndex(
				selectedIndex === 0 || selectedIndex === -1
					? suggestions.length - 1
					: selectedIndex - 1
			);
		} else if (event.key === "ArrowDown" || event.key === "Tab") {
			setSelectedIndex(selectedIndex === suggestions.length - 1 ? 0 : selectedIndex + 1);
		} else if (event.key === "Enter") {
			if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
				const albumId = suggestions[selectedIndex].id;

				navigate(`/album/${albumId}`);
				setIsAutocompleteOpen(false);
				setSelectedIndex(0);
			} else {
				onSubmit();
			}
		}
	};

	useEffect(() => {
		if (isAutocompleteOpen) {
			document.addEventListener("keydown", handleNavigation);
		}

		return () => {
			document.removeEventListener("keydown", handleNavigation);
		};
	}, [isAutocompleteOpen, selectedIndex, query]);

	useEffect(() => {
		if (isAutocompleteOpen) {
			document.addEventListener("click", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("click", handleOutsideClick);
			setSelectedIndex(-1);
		};
	}, [isAutocompleteOpen]);
};
