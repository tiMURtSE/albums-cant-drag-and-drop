import { IAlbum } from "types";
import {
	ContextMenu,
	ContextMenuIconWrapper,
	Cover,
	CreatedAt,
	Item,
	Names,
} from "./AlbumItem.styled";
import formatDate from "utils/formatDate";
import Image from "components/Image/Image";
import { Link } from "react-router-dom";
import ContextMenuIcon from "components/Icons/ContextMenuIcon/ContextMenuIcon";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { removeAlbum } from "store/albumsSlice";

type Props = {
	album: IAlbum;
	key: string;
};

const AlbumItem = ({ album }: Props) => {
	const likedAlbums = useAppSelector((state) => state.albums.albums);
	const isLikedAlbum = likedAlbums.find((likedAlbum) => likedAlbum.id === album.id);
	const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
	const dispatch = useAppDispatch();

	const removeAlbumFromFavorites = () => {
		dispatch(removeAlbum({ album }));
	};

	const openContextMenu = (event: any) => {
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
		<Item>
			<Cover>
				<div>
					<Link to={`/album/${album.id}`}>
						<Image
							src={album.image}
							width="80px"
							height="80px"
							alt={`${album.title} by ${album.artist}`}
						/>
					</Link>
				</div>
			</Cover>

			<Names>
				<div>
					<Link to={`/album/${album.id}`}>{album.title}</Link>
				</div>
				<div>{album.artist}</div>
			</Names>

			<div>{album.year}</div>

			<CreatedAt>
				{formatDate(album.createdAt)}
				<ContextMenuIconWrapper id={`click-${album.id}`} onClick={openContextMenu}>
					<div>
						<ContextMenuIcon />
					</div>
				</ContextMenuIconWrapper>
				<ContextMenu id={`menu-${album.id}`}>
					<div onClick={removeAlbumFromFavorites}>
						{isLikedAlbum ? "Удалить из Избранного" : "Добавить в Избранное"}
					</div>
				</ContextMenu>
			</CreatedAt>
		</Item>
	);
};

export default AlbumItem;
