import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdditionalInfo from "./AlbumInfo/AlbumInfo";
import Navbar from "components/Navbar/Navbar";
import Container from "styles/components/Container.styled";
import Paddings from "styles/components/Paddings.styled";
import { AlbumCover, Content } from "./AlbumPage.styled";
import { Album, Albums, AlbumsState } from "types";
import getSingleAlbum from "services/api/getSingleAlbum.api";
import formatAlbum from "utils/formatAlbum";
import Image from "components/Image/Image";
import AlbumInfo from "./AlbumInfo/AlbumInfo";

const AlbumPage = () => {
	const id = useParams().id;
	const [album, setAlbum] = useState<Album | null>(null);

	const getAlbum = async () => {
		const album = await getSingleAlbum(id);

		setAlbum(formatAlbum(album));
	};

	useEffect(() => {
		getAlbum();
	}, []);

	if (!album) return null;

	return (
		<Paddings>
			<Container>
				<Content>
					<AlbumCover>
						<Image
							src={album.image}
							width="450px"
							height="450px"
							alt={`${album.title} by ${album.artist}`}
						/>
					</AlbumCover>

					<AlbumInfo album={album} />
				</Content>
			</Container>
		</Paddings>
	);
};

export default AlbumPage;
