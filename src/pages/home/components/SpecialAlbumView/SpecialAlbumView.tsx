import Image from "styles/components/Image.styled";
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

type Props = {
	album: Album;
	key: string;
};

const SpecialAlbumView = ({ album }: Props) => {
	if (!album.id) return null;

	return (
		<Content place={1}>
			<Image>
				<img
					src={album.image}
					width="200"
					height="200"
					alt={`${album.title} by ${album.artist}`}
				/>
			</Image>

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
