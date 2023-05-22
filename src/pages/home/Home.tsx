import { List } from "./Home.styled";
import { useAppSelector } from "hooks";
import SpecialAlbumView from "./components/SpecialAlbumView/SpecialAlbumView";

const Home = () => {
	const likedAlbums = useAppSelector((state) => state.albums.albums);

	return (
		<List>
			{likedAlbums.map((album, index) => (
				<SpecialAlbumView album={album} position={index + 1} key={album.id} />
			))}
		</List>
	);
};

export default Home;
