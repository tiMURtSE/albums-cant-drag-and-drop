import Image from "components/Image/Image";
import AlbumWrapper from "styles/components/AlbumWrapper.styled";
import FlexBetween from "styles/components/FlexBetween.styled";
import { Album } from "types";
import { Info } from "./AlbumView.styled";
import formatDate from "utils/formatDate";
import { Link } from "react-router-dom";

type Props = {
	album: Album;
	key: string;
};

const AlbumView = ({ album }: Props) => {
	return (
		<AlbumWrapper>
			<FlexBetween>
				<Info>
					<Link to={`/album/${album.id}`}>
						<Image
							src={album.image}
							width="80px"
							height="80px"
							alt={`${album.title} by ${album.artist}`}
						/>
					</Link>

					<Link to={`/album/${album.id}`}>
						<div>
							<h3>{album.title}</h3>
							<p>{album.artist}</p>
						</div>
					</Link>
				</Info>

				<p>{album.year}</p>

				<p>{formatDate(album.createdAt)}</p>
			</FlexBetween>
		</AlbumWrapper>
	);
};

export default AlbumView;
