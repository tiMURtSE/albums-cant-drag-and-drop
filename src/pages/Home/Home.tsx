import { albumsSelector } from "store/selectors/albumsSelector";
import { useAppSelector } from "hooks";
import NoContentPlaceholder from "components/NoContentPlaceholder/NoContentPlaceholder";
import * as Styled from "./Home.styled";
import SpecialAlbumView from "./components/SpecialAlbumView/SpecialAlbumView";

const Home = () => {
	const likedAlbums = useAppSelector(albumsSelector);

	return (
		<Styled.Container>
			{likedAlbums.length ? (
				likedAlbums.map((album) => (
					<SpecialAlbumView
						album={album}
						key={album.id}
					/>
				))
			) : (
				<NoContentPlaceholder isLargeSize={true} />
			)}
		</Styled.Container>
	);
};

export default Home;
