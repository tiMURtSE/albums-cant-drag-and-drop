import { useParams } from "react-router-dom";
import CommonAlbumView from "components/CommonAlbumView/CommonAlbumView";
import Wrapper from "styles/components/Wrapper.styled";
import { Title } from "./Search.styled";
import { useAppSelector } from "hooks";
import { Loader } from "styles/components/Loader.styled";

const Search = () => {
	const foundAlbums = useAppSelector((state) => state.albums.foundAlbums);
	const isLoading = !foundAlbums.length;
	const { query } = useParams();

	return (
		<>
			<Title>
				Результаты поиска для: <span>{query}</span>
			</Title>

			<Wrapper>
				{isLoading ? (
					<Loader
						width="100%"
						height="40vh"
						contentHeight="100px"
						contentWidth="100px"
						border="10px"
					/>
				) : (
					foundAlbums.map((album) => <CommonAlbumView album={album} key={album.id} />)
				)}
			</Wrapper>
		</>
	);
};

export default Search;
