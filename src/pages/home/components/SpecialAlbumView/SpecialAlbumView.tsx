import {
	Artist,
	ArtistAndYear,
	Content,
	Description,
	TitleWrapper,
	Year,
} from "./SpecialAlbumView.styled";
import { IAlbum } from "types";
import { Link } from "react-router-dom";
import Image from "components/Image/Image";
import StylishAlbumTitle from "styles/components/StylishAlbumTitle.styled";

type Props = {
	album: IAlbum;
};

const SpecialAlbumView = ({ album }: Props) => {
	if (!Object.keys(album).length) return null;

	return (
		<Content position={album.position}>
			<Link to={`/album/${album.id}`}>
				<Image
					src={album.image}
					width="200"
					height="200"
					alt={`${album.title} by ${album.artist}`}
				/>
			</Link>

			<Description>
				<TitleWrapper>
					<Link to={`/album/${album.id}`}>
						<StylishAlbumTitle isExtraLarge>{album.title}</StylishAlbumTitle>
					</Link>
				</TitleWrapper>

				<ArtistAndYear>
					<Artist>{album.artist}</Artist>
					<Year>{album.year}</Year>
				</ArtistAndYear>
			</Description>
		</Content>
	);
};

export default SpecialAlbumView;
