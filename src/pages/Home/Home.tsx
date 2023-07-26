import { useAppSelector } from "hooks";
import NoContentPlaceholder from "components/NoContentPlaceholder/NoContentPlaceholder";
import { List } from "./Home.styled";
import SpecialAlbumView from "./components/SpecialAlbumView/SpecialAlbumView";

const Home = () => {
	const likedAlbums = useAppSelector((state) => state.albums.albums);

	return (
		<>
			<List>
				{likedAlbums.map((album) => (
					<SpecialAlbumView
						album={album}
						key={album.id}
					/>
				))}
			</List>

			{!likedAlbums.length && <NoContentPlaceholder isLargeSize={true} />}
		</>
	);
};

export default Home;
