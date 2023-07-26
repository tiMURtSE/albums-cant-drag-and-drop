import { useAppSelector } from "hooks";
import { ReactComponent as SadEmojiIcon } from "assets/icons/sad-emoji.svg";
import { List, NoContentPlaceholder } from "./Home.styled";
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

			{!likedAlbums.length && (
				<NoContentPlaceholder>
					<span>Альбомы пока не добавлены</span>

					<SadEmojiIcon />
				</NoContentPlaceholder>
			)}
		</>
	);
};

export default Home;
