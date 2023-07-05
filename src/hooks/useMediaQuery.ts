import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
	const media = window.matchMedia(query);
	const [matches, setMatches] = useState(media.matches);

	const resizeHandler = () => {
		const media = window.matchMedia(query);

		if (media.matches !== matches) {
			setMatches(media.matches);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", resizeHandler);

		return () => window.removeEventListener("resize", resizeHandler);
	}, [matches]);

	return matches;
};
