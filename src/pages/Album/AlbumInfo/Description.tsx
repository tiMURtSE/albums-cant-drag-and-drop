import { useEffect, useState } from "react";
import { addAlbum, removeAlbum } from "store/albumsSlice";
import { useAppDispatch, useAppSelector } from "hooks";
import { IAlbum, IMetadata } from "types";
import getAlbumMetadata from "services/api/getAlbumMetadata.api";
import formatMetadata from "utils/formatMetadata";
import { Artist, Content, TitleWrapper, IconWrapper, LikeButton } from "./Description.styled";
import SolidLike from "components/Icons/Like/SolidLike";
import RegularLike from "components/Icons/Like/RegularLike";
import ExternalLink from "components/Icons/ExternalLink/ExternalLink";
import Spotify from "components/Icons/Spotify/Spotify";
import StylishAlbumTitle from "styles/components/StylishAlbumTitle.styled";
import Metadata from "./Metadata/Metadata";
import Tracks from "./Tracks/Tracks";

type Props = {
	album: IAlbum;
};

const Description = ({ album }: Props) => {
	const [metadata, setMetadata] = useState<IMetadata | null>(null);
	const likedAlbums = useAppSelector((state) => state.albums.albums);
	const isAlbumLiked = likedAlbums.find((item) => item.id === album.id);
	const dispatch = useAppDispatch();

	const likeAlbum = () => {
		if (isAlbumLiked) {
			dispatch(removeAlbum({ album }));
		} else {
			dispatch(addAlbum({ album }));
		}
	};

	const getMetadata = async () => {
		const metadata = await getAlbumMetadata(album);

		setMetadata(formatMetadata(metadata));
	};

	useEffect(() => {
		getMetadata();
	}, [album]);

	return (
		<Content>
			<TitleWrapper>
				<a href={album.url} target="_blank">
					<StylishAlbumTitle isExtraLarge>
						{album.title}
						<IconWrapper>
							<ExternalLink />
							<Spotify />
						</IconWrapper>
					</StylishAlbumTitle>
				</a>
			</TitleWrapper>

			<Artist>{album.artist}</Artist>

			{isAlbumLiked ? (
				<LikeButton onClick={likeAlbum}>
					<SolidLike />
					<span>Удалить</span>
				</LikeButton>
			) : (
				<LikeButton onClick={likeAlbum}>
					<RegularLike />
					<span>Добавить</span>
				</LikeButton>
			)}

			{metadata && (
				<>
					<Metadata album={album} metadata={metadata} />

					<Tracks tracks={metadata.tracks} />
				</>
			)}
		</Content>
	);
};

export default Description;
