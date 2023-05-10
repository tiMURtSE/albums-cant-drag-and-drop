import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Albums } from "types";
import CommonAlbumView from "components/CommonAlbumView/CommonAlbumView";
import Navbar from "components/Navbar/Navbar";
import Container from "styles/components/Container.styled";
import Paddings from "styles/components/Paddings.styled";
import Wrapper from "styles/components/Wrapper.styled";
import { Loader, Subtitle, Title } from "./Search.styled";

const Search = () => {
	const foundAlbums: Albums = useSelector(
		(state: any) => state.albums.foundAlbums
	);
	const isLoading = !foundAlbums.length;
	const { query } = useParams();

	return (
		<Paddings>
			<Container>
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
			</Container>
		</Paddings>
	);
};

export default Search;
