import { useEffect, useState } from "react";
import { addAlbum, removeAlbum } from "store/albumsSlice";
import { useAppDispatch, useAppSelector } from "hooks";
import ExternalLink from "components/Icons/ExternalLink/ExternalLink";
import RegularLike from "components/Icons/Like/RegularLike";
import Spotify from "components/Icons/Spotify/Spotify";
import AnimatedButton from "components/UI/AnimatedButton/AnimatedButton";
import getAlbumMetadata from "services/api/getAlbumMetadata.api";
import FlexColumn from "styles/components/FlexColumn.styled";
import StylishAlbumTitle from "styles/components/StylishAlbumTitle.styled";
import { IAlbum, IMetadata } from "types";
import formatMetadata from "utils/formatMetadata";
import { ReactComponent as EmptyLikeIcon } from "assets/icons/empty-like.svg";
import { ReactComponent as FilledLikeIcon } from "assets/icons/filled-like.svg";
import { Artist, Content, TitleWrapper, IconWrapper } from "./Description.styled";
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
			<FlexColumn gap="0.5rem">
				<TitleWrapper>
					<StylishAlbumTitle isExtraLarge>
						<a
							href={album.url}
							target="_blank"
						>
							{album.title}
						</a>

						<IconWrapper>
							<ExternalLink />
							<Spotify />
						</IconWrapper>
					</StylishAlbumTitle>
				</TitleWrapper>

				<Artist>{album.artist}</Artist>
			</FlexColumn>

			{isAlbumLiked ? (
				<AnimatedButton onClick={likeAlbum}>
					<FilledLikeIcon />
					<span>Удалить</span>
				</AnimatedButton>
			) : (
				<AnimatedButton onClick={likeAlbum}>
					<EmptyLikeIcon />
					<span>Добавить</span>
				</AnimatedButton>
			)}

			{metadata && (
				<>
					<Metadata
						album={album}
						metadata={metadata}
					/>

					<Tracks tracks={metadata.tracks} />
				</>
			)}
		</Content>
	);
};

export default Description;
