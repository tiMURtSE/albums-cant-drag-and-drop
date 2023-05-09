import {
	Artist,
	ArtistAndYear,
	Content,
	Info,
	Title,
	Year,
} from "./SpecialAlbumView.styled";
import { Album } from "types";
import { Link } from "react-router-dom";
import Image from "components/Image/Image";

type Props = {
	album: Album;
	key: string;
};

const SpecialAlbumView = ({ album }: Props) => {
	if (!album.id) return null;

	return (
		<Content place={1}>
			<Link to={`/album/${album.id}`}>
				<Image
					src={album.image}
					width="200"
					height="200"
					alt={`${album.title} by ${album.artist}`}
				/>
			</Link>

			<Info>
				<Link to={`/album/${album.id}`}>
					<Title>{album.title}</Title>
				</Link>

				<ArtistAndYear>
					<Artist>{album.artist}</Artist>
					<Year>{album.year}</Year>
				</ArtistAndYear>
			</Info>
		</Content>
	);
};

export default SpecialAlbumView;
