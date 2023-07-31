import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getSingleAlbum from "services/api/getSingleAlbum.api";
import { Loader } from "styles/components/Loader.styled";
import { IAlbum } from "types";
import formatAlbum from "utils/formatAlbum";
import { AlbumCover, Content } from "./Album.styled";
import Description from "./AlbumInfo/Description";

const Album = () => {
	const { id } = useParams();
	const [album, setAlbum] = useState<IAlbum | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const fetchAndFormatAlbum = async () => {
			setIsLoading(true);

			const album = await getSingleAlbum(id);

			setAlbum(formatAlbum(album));
			setIsLoading(false);
		};

		try {
			fetchAndFormatAlbum();
		} catch (error) {
			console.error(error);
		}
	}, [id]);

	return (
		<>
			{isLoading ? (
				<Loader
					width="100%"
					height="calc(100vh - 164px * 2)"
					contentWidth="100px"
					contentHeight="100px"
					border="10px"
				/>
			) : album ? (
				<Content>
					<AlbumCover>
						<img
							src={album.images[0].url}
							alt={`${album.title} by ${album.artist}`}
						/>
					</AlbumCover>

					<Description album={album} />
				</Content>
			) : (
				<div>Альбом не найден</div>
			)}
		</>
	);
};

export default Album;
