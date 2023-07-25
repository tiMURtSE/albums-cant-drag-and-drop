export const adjustAlbumTitleFontSize = (ref: React.RefObject<HTMLHeadingElement>) => {
	if (!ref.current) return;

	const THREE_LINES_SIZE = 80;
	const AlbumTitleHeight = ref.current.offsetHeight;

	if (AlbumTitleHeight > THREE_LINES_SIZE) {
		ref.current.style.fontSize = "16px";
	}
};
