import { useEffect, useState } from "react";

export const useDebounce = (query: string, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState(query);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedValue(query);
		}, delay);

		return () => clearTimeout(timeoutId);
	}, [query]);

	return debouncedValue;
};
