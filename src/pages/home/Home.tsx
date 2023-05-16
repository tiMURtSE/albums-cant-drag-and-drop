import Paddings from "styles/components/Paddings.styled";
import Container from "styles/components/Container.styled";
import { Content, List } from "./Home.styled";
import SpecialAlbumView from "./components/SpecialAlbumView/SpecialAlbumView";
import { Album, Albums } from "types";
import { useSelector } from "react-redux";

const Home = () => {
	const favoriteAlbums = useSelector((state: any) => state.albums.albums);

	return (
		<List>
			{favoriteAlbums.map((album: Album) => (
				<SpecialAlbumView album={album} key={album.id} />
			))}
		</List>
	);
};

export default Home;
