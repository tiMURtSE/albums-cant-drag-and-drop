import ContextMenuIcon from "components/Icons/ContextMenuIcon/ContextMenuIcon";
import { Menu, IconWrapper, Item, Wrapper } from "./ContextMenu.styled";
import { useAppDispatch, useAppSelector } from "hooks";
import { IAlbum } from "types";
import { useContextMenuHandler } from "hooks/useContextMenuHandler";
import { removeAlbum } from "store/albumsSlice";

type Props = {
	album: IAlbum;
};

const ContextMenu = ({ album }: Props) => {
	const favoriteAlbums = useAppSelector((state) => state.albums.albums);
	const isFavoriteAlbum = favoriteAlbums.find((favoriteAlbum) => favoriteAlbum.id === album.id);
	const openContextMenu = useContextMenuHandler(album);
	const dispatch = useAppDispatch();

	const removeAlbumFromFavorites = () => {
		dispatch(removeAlbum({ album }));
	};

	return (
		<Wrapper>
			<IconWrapper id={`click-${album.id}`} onClick={openContextMenu}>
				<ContextMenuIcon />
			</IconWrapper>

			<Menu id={`menu-${album.id}`}>
				<Item onClick={removeAlbumFromFavorites}>
					{isFavoriteAlbum ? "Удалить из Избранного" : "Добавить в Избранное"}
				</Item>
				<Item>Добавить в Запланированное</Item>
				<Item>Добавить в папку</Item>
			</Menu>
		</Wrapper>
	);
};

export default ContextMenu;
