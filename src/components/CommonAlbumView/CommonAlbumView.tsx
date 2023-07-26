import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeAlbum } from "store/albumsSlice";
import { addAlbum } from "store/albumsSlice";
import { useMediaQuery } from "hooks/useMediaQuery";
import Image from "components/Image/Image";
import IconButton from "components/UI/IconButton/IconButton";
import AlbumWrapper from "styles/components/AlbumWrapper.styled";
import { ButtonIconWrapper } from "styles/components/ButtonIconWrapper.styled";
import FlexBetween from "styles/components/FlexBetween.styled";
import { theme } from "theme/theme";
import { IAlbum } from "types";
import { ReactComponent as EmptyLikeIcon } from "assets/icons/empty-like.svg";
import { ReactComponent as FilledLikeIcon } from "assets/icons/filled-like.svg";
import { Like, Info } from "./CommonAlbumView.styled";

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
							src={album.images[1].url}
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

				<div>
					<IconButton onClick={like}>
						{isAlbumLiked ? <FilledLikeIcon /> : <EmptyLikeIcon />}
					</IconButton>
				</div>
			</FlexBetween>
		</AlbumWrapper>
	);
};

export default CommonAlbumView;
