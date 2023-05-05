import { useEffect, useState } from "react";
import Paddings from "styles/components/Paddings.styled";
import Container from "styles/components/Container.styled";
import Wrapper from "styles/components/Wrapper.styled";
import Navbar from "components/Navbar/Navbar";
import { List } from "./Home.styled";
import SpecialAlbumView from "./components/SpecialAlbumView/SpecialAlbumView";
import LocalStorage from "utils/LocalStorage";
import { Album, Albums } from "types";
import formatAlbum from "utils/formatAlbum";
import getSeveralAlbums from "services/api/getSeveralAlbums.api";

const Home = () => {
	const favoriteAlbumsId = LocalStorage.get("User").favoriteAlbumsId;
	const [favoriteAlbums, setFavoriteAlbums] = useState<Albums>([]);

	const getFavoriteAlbums = async (favoriteAlbumsId: Array<string>) => {
		const { albums } = await getSeveralAlbums(favoriteAlbumsId);

		for (let i = 0; i < albums.length; i++) {
			albums[i] = formatAlbum(albums[i]);
		}

		setFavoriteAlbums(albums);
	};

	useEffect(() => {
		getFavoriteAlbums(favoriteAlbumsId);
	}, []);

	return (
		<>
			<Navbar />

			<Paddings>
				<Container>
					<Wrapper>
						<List>
							{favoriteAlbums.map((album: Album) => (
								<SpecialAlbumView
									album={album}
									key={album.id}
								/>
							))}
						</List>
					</Wrapper>
				</Container>
			</Paddings>
		</>
	);
};

export default Home;
