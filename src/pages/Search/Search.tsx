import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CommonAlbumView from "components/CommonAlbumView/CommonAlbumView";
import Navbar from "components/Navbar/Navbar";
import Container from "styles/components/Container.styled";
import Paddings from "styles/components/Paddings.styled";
import Wrapper from "styles/components/Wrapper.styled";
import { Loader, Subtitle, Title } from "./Search.styled";
import { Albums } from "types";
import { useSelector } from "react-redux";

const Search = () => {
    const albums: Albums = useSelector((state: any) => state.albums.searchAlbums)
	const [isLoading, setIsLoading] = useState(false);
    const { query } = useParams();
    
	return (
		<>
			<Navbar />

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
								<Subtitle>Результаты</Subtitle>

								{albums.map(album => (
									<CommonAlbumView
										album={album}
										key={album.id}
									/>
								))}
							</>
						)}
					</Wrapper>
				</Container>
			</Paddings>
		</>
	);
};

export default Search;
