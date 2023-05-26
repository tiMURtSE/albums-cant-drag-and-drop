import ContextMenuIcon from "components/Icons/ContextMenuIcon/ContextMenuIcon";
import { Menu, MenuIconWrapper, MenuItem, MenuWrapper } from "./ContextMenu.styled";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { removeAlbum } from "store/albumsSlice";
import { IAlbum } from "types";

type Props = {
	album: IAlbum;
};

const ContextMenu = ({ album }: Props) => {
	const favoriteAlbums = useAppSelector((state) => state.albums.albums);
	const isFavoriteAlbum = favoriteAlbums.find((favoriteAlbum) => favoriteAlbum.id === album.id);
	const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
	const dispatch = useAppDispatch();
	const removeAlbumFromFavorites = () => {
		dispatch(removeAlbum({ album }));
	};

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

	const handleOutsideClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		const contextMenu = document.querySelector(`#menu-${album.id}`) as HTMLElement;
		const contextMenuIcon = document.querySelector(`#click-${album.id}`) as HTMLElement;

		if (!target.closest(`#menu-${album.id}`) && !target.closest(`#click-${album.id}`)) {
			contextMenu.style.display = "none";
			contextMenuIcon.attributes.removeNamedItem("style");
			setIsContextMenuOpen(false);
		}
	};

	useEffect(() => {
		if (isContextMenuOpen) {
			document.addEventListener("click", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [isContextMenuOpen]);

	return (
		<MenuWrapper>
			<MenuIconWrapper id={`click-${album.id}`} onClick={openContextMenu}>
				<ContextMenuIcon />
			</MenuIconWrapper>

			<Menu id={`menu-${album.id}`}>
				<MenuItem onClick={removeAlbumFromFavorites}>
					{isFavoriteAlbum ? "Удалить из Избранного" : "Добавить в Избранное"}
				</MenuItem>
				<MenuItem>Добавить в Запланированное</MenuItem>
				<MenuItem>Добавить в папку</MenuItem>
			</Menu>
		</MenuWrapper>
	);
};

export default ContextMenu;
