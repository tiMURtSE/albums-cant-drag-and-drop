import AlbumWrapper from "styles/components/AlbumWrapper.styled";
import FlexBetween from "styles/components/FlexBetween.styled";
import { Like, Info } from "./CommonAlbumView.styled";
import { IAlbum } from "types";
import { useDispatch, useSelector } from "react-redux";
import { removeAlbum } from "store/albumsSlice";
import { addAlbum } from "store/albumsSlice";
import { Link } from "react-router-dom";
import Image from "components/Image/Image";
import { theme } from "theme/theme";
import { useMediaQuery } from "hooks/useMediaQuery";
import { ButtonIconWrapper } from "styles/components/ButtonIconWrapper.styled";
import { ReactComponent as FilledLikeIcon } from "assets/icons/filled-like.svg";
import { ReactComponent as EmptyLikeIcon } from "assets/icons/empty-like.svg";

type Props = {
	album: IAlbum;
	key: string;
};

const CommonAlbumView = ({ album }: Props) => {
	const favoriteAlbums = useSelector((state: any) => state.albums.albums);
	const isAlbumLiked = favoriteAlbums.find((favAlbum: any) => favAlbum.id === album.id);
	const dispatch = useDispatch();

	const smallMediaQuery = theme.media.small;
	const isBelowSmallScreens = useMediaQuery(smallMediaQuery);

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
				<FlexBetween gap={isBelowSmallScreens ? "0.5rem" : "2rem"}>
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

				<ButtonIconWrapper
					width="20px"
					height="20px"
					onClick={like}
				>
					{isAlbumLiked ? <FilledLikeIcon /> : <EmptyLikeIcon />}
				</ButtonIconWrapper>
			</FlexBetween>
		</AlbumWrapper>
	);
};

export default CommonAlbumView;
