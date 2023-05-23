import { IAlbum } from "types";
import {
	ContextMenu,
	ContextMenuIconWrapper,
	Cover,
	CreatedAt,
	Input,
	Item,
	Names,
} from "./AlbumItem.styled";
import formatDate from "utils/formatDate";
import Image from "components/Image/Image";
import { Link } from "react-router-dom";
import ContextMenuIcon from "components/Icons/ContextMenuIcon/ContextMenuIcon";

type Props = {
	album: IAlbum;
	key: string;
};

const AlbumItem = ({ album }: Props) => {
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
				<ContextMenuIconWrapper>
					<Input type="checkbox" id={`context-menu ${album.id}`} />
					<label htmlFor={`context-menu ${album.id}`}>
						<ContextMenuIcon />
					</label>
					<ContextMenu>
						<div>Нажать</div>
						<div>Убрать</div>
					</ContextMenu>
				</ContextMenuIconWrapper>
			</CreatedAt>
		</Item>
	);
};

export default AlbumItem;
