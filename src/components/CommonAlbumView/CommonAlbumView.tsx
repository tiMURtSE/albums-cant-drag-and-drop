import AlbumWrapper from "styles/components/AlbumWrapper.styled";
import FlexBetween from "styles/components/FlexBetween.styled";
import { Like, Info } from "./CommonAlbumView.styled";
import { IAlbum } from "types";
import { useDispatch, useSelector } from "react-redux";
import { removeAlbum } from "store/albumsSlice";
import { addAlbum } from "store/albumsSlice";
import { Link } from "react-router-dom";
import Image from "components/Image/Image";
import SolidLike from "components/Icons/Like/SolidLike";
import RegularLike from "components/Icons/Like/RegularLike";

type Props = {
	album: IAlbum;
	key: string;
};

const CommonAlbumView = ({ album }: Props) => {
	const favoriteAlbums = useSelector((state: any) => state.albums.albums);
	const isAlbumLiked = favoriteAlbums.find((favAlbum: any) => favAlbum.id === album.id);
	const dispatch = useDispatch();

	const like = () => {
		if (isAlbumLiked) {
			dispatch(removeAlbum({ album }));
		} else {
			dispatch(addAlbum({ album }));
		}
	};

	return (
		<AlbumWrapper>
			<FlexBetween>
				<FlexBetween gap="2rem">
					<Link to={`/album/${album.id}`}>
						<Image
							src={album.image}
							width="80"
							height="80"
							alt={`${album.title} by ${album.artist}`}
						/>
					</Link>

					<Link to={`/album/${album.id}`}>
						<Info>
							<h3>{album.title}</h3>
							<p>{album.artist}</p>
						</Info>
					</Link>
				</FlexBetween>

				<Like onClick={like}>{isAlbumLiked ? <SolidLike /> : <RegularLike />}</Like>
			</FlexBetween>
		</AlbumWrapper>
	);
};

export default CommonAlbumView;
