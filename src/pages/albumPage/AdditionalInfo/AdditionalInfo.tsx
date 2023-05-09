import { Album } from "types";
import {
	Artist,
	LikeButton,
	SpecialFont,
	Tag,
	Title,
} from "./AdditionalInfo.styled";
import formatAdditionalInfo from "utils/formatAdditionalInfo";
import { useEffect, useState } from "react";
import getAlbumInfo from "services/api/getAlbumInfo.api";
import splitNumber from "utils/splitNumber";
import Tracks from "./Tracks/Tracks";
import { useDispatch, useSelector } from "react-redux";
import { addAlbum, removeAlbum } from "store/albumsSlice";
import SolidLike from "components/Like/SolidLike";
import RegularLike from "components/Like/RegularLike";

type Props = {
	album: Album;
};

const AdditionalInfo = ({ album }: Props) => {
	const [additionalInfo, setAdditionalInfo] = useState<any>({});
	const likedAlbums = useSelector((state: any) => state.albums.albums);
	const isAlbumLiked = likedAlbums.find((item: any) => item.id === album.id);
	const dispatch = useDispatch();

	const like = () => {
		if (isAlbumLiked) {
			dispatch(removeAlbum({ album }));
		} else {
			dispatch(addAlbum({ album }));
		}
	};

	const getAdditionalInfo = async () => {
		const albumInfo = await getAlbumInfo(album);

		setAdditionalInfo(formatAdditionalInfo(albumInfo));
	};

	useEffect(() => {
		getAdditionalInfo();
	}, []);

	if (!Object.keys(additionalInfo).length) return null;

	return (
		<>
			<div>
				<Title>{album.title}</Title>
				<Artist>{album.artist}</Artist>
			</div>

			<div>
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
			</div>

			<div>
				<div>
					Год: <SpecialFont>{album.year}</SpecialFont>
				</div>
				<div>
					Теги:{" "}
					{additionalInfo.tags.map((tag: any, index: number) => (
						<Tag>{tag.name}</Tag>
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
				<Tracks tracks={additionalInfo.tracks} />
			</div>
		</>
	);
};

export default AdditionalInfo;
