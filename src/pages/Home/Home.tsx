import { useAppSelector } from "hooks";
import { List } from "./Home.styled";
import SpecialAlbumView from "./components/SpecialAlbumView/SpecialAlbumView";

const Home = () => {
	const likedAlbums = useAppSelector((state) => state.albums.albums);

	return (
		<List>
			{likedAlbums.map((album) => (
				<SpecialAlbumView
					album={album}
					key={album.id}
				/>
			))}
		</List>
	);
};

export default Home;
