import { useEffect, useState } from "react";
import { addAlbum, removeAlbum } from "store/albumsSlice";
import { useAppDispatch, useAppSelector } from "hooks";
import { IAlbum, IMetadata } from "types";
import getAlbumMetadata from "services/api/getAlbumMetadata.api";
import formatMetadata from "utils/formatMetadata";
import { Artist, Content, TitleWrapper, IconWrapper, LikeButton } from "./Description.styled";
import RegularLike from "components/Icons/Like/RegularLike";
import ExternalLink from "components/Icons/ExternalLink/ExternalLink";
import Spotify from "components/Icons/Spotify/Spotify";
import StylishAlbumTitle from "styles/components/StylishAlbumTitle.styled";
import Metadata from "./Metadata/Metadata";
import Tracks from "./Tracks/Tracks";
import Button from "components/UI/Button/Button";
import { ReactComponent as FilledLikeIcon } from "assets/icons/filled-like.svg";
import FlexColumn from "styles/components/FlexColumn.styled";

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
							<IconWrapper>
								<ExternalLink />
								<Spotify />
							</IconWrapper>
						</a>
					</StylishAlbumTitle>
				</TitleWrapper>

				<Artist>{album.artist}</Artist>
			</FlexColumn>

			{isAlbumLiked ? (
				<Button onClick={likeAlbum}>
					<FilledLikeIcon />
					<span>Удалить</span>
				</Button>
			) : (
				<LikeButton onClick={likeAlbum}>
					<RegularLike />
					<span>Добавить</span>
				</LikeButton>
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
