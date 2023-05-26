import { Link } from "react-router-dom";
import { IAlbum } from "types";
import formatDate from "utils/formatDate";
import Image from "components/Image/Image";
import { Artist, CoverWrapper, CreatedAt, Item, Names, Title, Year } from "./AlbumItem.styled";
import ContextMenu from "../ContextMenu/ContextMenu";

type Props = {
	album: IAlbum;
	key: string;
};

const AlbumItem = ({ album }: Props) => {
	return (
		<Item>
			<CoverWrapper>
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
			</CoverWrapper>

			<Names>
				<Title>
					<Link to={`/album/${album.id}`}>{album.title}</Link>
				</Title>

				<Artist>{album.artist}</Artist>
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
