import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IAlbum } from "types";
import CommonAlbumView from "components/CommonAlbumView/CommonAlbumView";
import Wrapper from "styles/components/Wrapper.styled";
import { Content, Loader, Subtitle, Title } from "./Search.styled";
import { useAppSelector } from "hooks";

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
					<Loader />
				) : (
					<>
						{foundAlbums.map((album) => (
							<CommonAlbumView album={album} key={album.id} />
						))}
					</>
				)}
			</Wrapper>
		</>
	);
};

export default Search;
