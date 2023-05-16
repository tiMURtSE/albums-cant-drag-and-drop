import { Album, IAdditionalInfo } from "types";
import {
	AdditionalInfo,
	Artist,
	Content,
	LikeButton,
	SpecialFont,
	Tag,
	Title,
} from "./AlbumInfo.styled";
import formatAdditionalInfo from "utils/formatAdditionalInfo";
import { useEffect, useState } from "react";
import getAlbumInfo from "services/api/getAlbumInfo.api";
import splitNumber from "utils/splitNumber";
import Tracks from "./Tracks/Tracks";
import { useDispatch, useSelector } from "react-redux";
import { addAlbum, removeAlbum } from "store/albumsSlice";
import SolidLike from "components/Icons/Like/SolidLike";
import RegularLike from "components/Icons/Like/RegularLike";
import ExternalLink from "components/Icons/ExternalLink/ExternalLink";
import Spotify from "components/Icons/Spotify/Spotify";
import getAdditionalAlbumInfo from "services/api/getAlbumInfo.api";
import { AlbumsState } from "types";

type Props = {
	album: Album;
};

const AlbumInfo = ({ album }: Props) => {
	const [additionalInfo, setAdditionalInfo] =
		useState<IAdditionalInfo | null>(null);
	const likedAlbums = useSelector(
		(state: { albums: AlbumsState }) => state.albums.albums
	);
	const isAlbumLiked = likedAlbums.find((item) => item.id === album.id);
	const dispatch = useDispatch();

	const like = () => {
		if (isAlbumLiked) {
			dispatch(removeAlbum({ album }));
		} else {
			dispatch(addAlbum({ album }));
		}
	};

	const getAdditionalInfo = async () => {
		const albumInfo = await getAdditionalAlbumInfo(album);

		setAdditionalInfo(formatAdditionalInfo(albumInfo));
	};

	useEffect(() => {
		getAdditionalInfo();
	}, [album]);

	return (
		<Content>
			<Title>
				<a href={album.url} target="_blank">
					{album.title}
					<span>
						<ExternalLink />
						<Spotify />
					</span>
				</a>
			</Title>

			<Artist>{album.artist}</Artist>

			{isAlbumLiked ? (
				<LikeButton onClick={like}>
					<SolidLike />
					<span>Удалить</span>
				</LikeButton>
			) : (
				<LikeButton onClick={like}>
					<RegularLike />
					<span>Добавить</span>
				</LikeButton>
			)}

			{additionalInfo && (
				<>
					<AdditionalInfo>
						<div>
							Год: <SpecialFont>{album.year}</SpecialFont>
						</div>

						<div>
							Теги:{" "}
							{additionalInfo.tags &&
								additionalInfo.tags.map((tag) => (
									<Tag key={tag.name}>{tag.name}</Tag>
								))}
						</div>

						<div>
							Слушателей:{" "}
							<SpecialFont>
								{splitNumber(additionalInfo.listeners)}
							</SpecialFont>
						</div>

						<div>
							Проигрышей:{" "}
							<SpecialFont>
								{splitNumber(additionalInfo.playcount)}
							</SpecialFont>
						</div>
					</AdditionalInfo>

					<Tracks tracks={additionalInfo.tracks} />
				</>
			)}
		</Content>
	);
};

export default AlbumInfo;
