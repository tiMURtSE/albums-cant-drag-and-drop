import {
	Artist,
	ArtistAndYear,
	Content,
	CrownIconWrapper,
	Description,
	TitleWrapper,
	Year,
} from "./SpecialAlbumView.styled";
import { IAlbum } from "types";
import { Link } from "react-router-dom";
import Image from "components/Image/Image";
import StylishAlbumTitle from "styles/components/StylishAlbumTitle.styled";
import { ReactComponent as CrownIcon } from "assets/icons/crown.svg";

type Props = {
	album: IAlbum;
};

const SpecialAlbumView = ({ album }: Props) => {
	if (!Object.keys(album).length) return null;

	return (
		<Content position={album.position}>
			{album.position <= 3 && (
				<CrownIconWrapper position={album.position}>
					<CrownIcon />
				</CrownIconWrapper>
			)}

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
					<StylishAlbumTitle isExtraLarge>
						<Link to={`/album/${album.id}`}>{album.title}</Link>
					</StylishAlbumTitle>
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
