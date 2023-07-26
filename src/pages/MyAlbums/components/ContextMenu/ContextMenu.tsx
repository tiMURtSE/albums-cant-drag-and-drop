// import ContextMenuIcon from "components/Icons/ContextMenuIcon/ContextMenuIcon";
import { removeAlbum } from "store/albumsSlice";
import { useAppDispatch, useAppSelector } from "hooks";
import { useContextMenuHandler } from "hooks/useContextMenuHandler";
import IconButton from "components/UI/IconButton/IconButton";
import { ButtonIconWrapper } from "styles/components/ButtonIconWrapper.styled";
import { IAlbum } from "types";
import { ReactComponent as ContextMenuIcon } from "assets/icons/context-menu.svg";
import { Menu, IconWrapper, Item, Wrapper } from "./ContextMenu.styled";

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
			<IconWrapper
				id={`click-${album.id}`}
				onClick={openContextMenu}
			>
				<IconButton
					width="25px"
					height="25px"
				>
					<ContextMenuIcon />
				</IconButton>
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
