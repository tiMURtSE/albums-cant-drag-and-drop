import { Link } from "react-router-dom";
import Image from "components/Image/Image";
import { DragAndDrop, IAlbum } from "types";
import formatDate from "utils/formatDate";
import ContextMenu from "../ContextMenu/ContextMenu";
import {
	Artist,
	CoverWrapper,
	CreatedAt,
	Item,
	Names,
	Position,
	Title,
	Year,
} from "./AlbumItem.styled";

type Props = {
	album: IAlbum;
	dragAndDropHandlers: DragAndDrop;
};

const AlbumItem = ({ album, dragAndDropHandlers }: Props) => {
	let handlers = null;
	let isDragging = false;

	if (dragAndDropHandlers) {
		handlers = dragAndDropHandlers(album);
		isDragging = true;
	}

	return (
		<Item
			{...handlers}
			isDragging={isDragging}
		>
			<Position>{album.position}</Position>

			<CoverWrapper>
				<div>
					<Link to={`/album/${album.id}`}>
						<Image
							src={album.images[1].url}
							width="80px"
							height="80px"
							alt={`${album.title} by ${album.artist}`}
						/>
					</Link>
				</div>
			</CoverWrapper>

			<Names>
				<Link to={`/album/${album.id}`}>
					<div>
						<Title>{album.title}</Title>

						<Artist>{album.artist}</Artist>
					</div>
				</Link>
			</Names>

			<Year>{album.year}</Year>

			<CreatedAt>
				<span>{formatDate(album.createdAt)}</span>
			</CreatedAt>

			<ContextMenu album={album} />
		</Item>
	);
};

export default AlbumItem;
