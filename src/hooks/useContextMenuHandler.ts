import { useAppDispatch } from "hooks";
import { useEffect, useState } from "react";
import { removeAlbum } from "store/albumsSlice";
import { IAlbum } from "types";
import { useHandleOutsideClick } from "./useHandleOutsideClick";

export const useContextMenuHandler = (album: IAlbum) => {
	const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

	const openContextMenu = () => {
		const contextMenu = document.querySelector(`#menu-${album.id}`) as HTMLElement;
		const contextMenuIcon = document.querySelector(`#click-${album.id}`) as HTMLElement;

		if (isContextMenuOpen) {
			contextMenu.style.display = "none";
			contextMenuIcon.attributes.removeNamedItem("style");
			setIsContextMenuOpen(false);
		} else {
			contextMenu.style.display = "block";
			contextMenuIcon.style.display = "block";
			setIsContextMenuOpen(true);
		}
	};

	const insideClickSelectors = [`#menu-${album.id}`, `#click-${album.id}`];
	const closeContexMenu = () => {
		const contextMenu = document.querySelector(insideClickSelectors[0]) as HTMLElement;
		const contextMenuIcon = document.querySelector(insideClickSelectors[1]) as HTMLElement;

		contextMenu.style.display = "none";
		contextMenuIcon.attributes.removeNamedItem("style");
		setIsContextMenuOpen(false);
	};

	useHandleOutsideClick(isContextMenuOpen, insideClickSelectors, closeContexMenu);

	// const handleOutsideClick = (event: MouseEvent) => {
	// 	const target = event.target as HTMLElement;

	// 	if (!target.closest(`#menu-${album.id}`) && !target.closest(`#click-${album.id}`)) {
	// 	}
	// };

	// useEffect(() => {
	// 	if (isContextMenuOpen) {
	// 		document.addEventListener("click", handleOutsideClick);
	// 	}

	// 	return () => {
	// 		document.removeEventListener("click", handleOutsideClick);
	// 	};
	// }, [isContextMenuOpen]);

	return openContextMenu;
};
