import { useEffect, useState } from "react";
import Paddings from "styles/components/Paddings.styled";
import Container from "styles/components/Container.styled";
import Wrapper from "styles/components/Wrapper.styled";
import Navbar from "components/Navbar/Navbar";
import { Content, List } from "./Home.styled";
import SpecialAlbumView from "./components/SpecialAlbumView/SpecialAlbumView";
import LocalStorage from "utils/LocalStorage";
import { Album, Albums } from "types";
import { useSelector } from "react-redux";

const Home = () => {
	const favoriteAlbums = useSelector((state: any) => state.albums.albums);

	return (
		<>
			<Navbar />

			<Paddings>
				<Container>
					<Content>
						<List>
							{favoriteAlbums.map((album: Album) => (
								<SpecialAlbumView
									album={album}
									key={album.id}
								/>
							))}
						</List>
					</Content>
				</Container>
			</Paddings>
		</>
	);
};

export default Home;
