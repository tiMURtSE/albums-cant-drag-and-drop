import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAlbum } from "types";
import getSingleAlbum from "services/api/getSingleAlbum.api";
import formatAlbum from "utils/formatAlbum";
import { AlbumCover, Content } from "./Album.styled";
import Image from "components/Image/Image";
import Description from "./AlbumInfo/Description";

const Album = () => {
	const { id } = useParams();
	const [album, setAlbum] = useState<IAlbum | null>(null);

	const getAlbum = async () => {
		const album = await getSingleAlbum(id);

		setAlbum(formatAlbum(album));
	};

	useEffect(() => {
		getAlbum();
	}, [id]);

	if (!album) return null;

	return (
		<Content>
			<AlbumCover>
				<Image
					src={album.image}
					width="450px"
					height="450px"
					alt={`${album.title} by ${album.artist}`}
				/>
			</AlbumCover>

			<Description album={album} />
		</Content>
	);
};

export default Album;
